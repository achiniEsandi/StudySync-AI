import mongoose from 'mongoose';
import { ApiError } from '../../utils/ApiError.js';
import { Subject } from './subject.model.js';
import { LEARNING_COMPONENT_KEYS } from './subject.constants.js';

const normalizeLearningComponent = (component = {}) => {
  const plannedHours = component.plannedHours ?? 0;
  const completedHours = component.completedHours ?? 0;
  const totalSessions = component.totalSessions ?? 0;
  const completedSessions = component.completedSessions ?? 0;

  const hoursProgress =
    plannedHours > 0 ? (completedHours / plannedHours) * 100 : 0;
  const sessionProgress =
    totalSessions > 0 ? (completedSessions / totalSessions) * 100 : 0;

  const progressPercentage = Math.round(
    Math.max(hoursProgress, sessionProgress, component.progressPercentage ?? 0),
  );

  let status = component.status ?? 'Not Started';

  if (progressPercentage >= 100 || (plannedHours > 0 && completedHours >= plannedHours)) {
    status = 'Completed';
  } else if (completedHours > 0 || completedSessions > 0) {
    status = 'Ongoing';
  } else if (plannedHours === 0 && totalSessions === 0) {
    status = component.status ?? 'Not Started';
  }

  return {
    plannedHours,
    completedHours,
    totalSessions,
    completedSessions,
    progressPercentage: Math.min(progressPercentage, 100),
    status,
    notes: component.notes ?? '',
  };
};

const calculateOverallProgress = (subject) => {
  const componentProgresses = LEARNING_COMPONENT_KEYS.map(
    (key) => subject[key]?.progressPercentage ?? 0,
  );

  const caItems = subject.continuousAssessments ?? [];
  const completedCa = caItems.filter((item) => item.status === 'Completed').length;
  const caProgress = caItems.length ? (completedCa / caItems.length) * 100 : 0;

  const finalExamCoverage = subject.finalExam?.syllabusCoverage ?? 0;

  const values = [...componentProgresses, caProgress, finalExamCoverage];
  const overall = values.reduce((sum, value) => sum + value, 0) / values.length;

  return Math.round(overall);
};

const buildSubjectPayload = (payload, userId) => {
  const subject = {
    userId,
    subjectName: payload.subjectName.trim(),
    subjectCode: payload.subjectCode.trim(),
    semester: payload.semester.trim(),
    creditValue: payload.creditValue,
    lecturer: payload.lecturer?.trim() ?? '',
    description: payload.description?.trim() ?? '',
  };

  LEARNING_COMPONENT_KEYS.forEach((key) => {
    subject[key] = normalizeLearningComponent(payload[key]);
  });

  subject.continuousAssessments = payload.continuousAssessments ?? [];
  subject.finalExam = payload.finalExam ?? {};
  subject.overallProgress = calculateOverallProgress(subject);

  return subject;
};

const findOwnedSubject = async (subjectId, userId) => {
  if (!mongoose.Types.ObjectId.isValid(subjectId)) {
    throw new ApiError(404, 'Subject not found');
  }

  const subject = await Subject.findOne({ _id: subjectId, userId });

  if (!subject) {
    throw new ApiError(404, 'Subject not found');
  }

  return subject;
};

export const subjectService = {
  createSubject: async (userId, payload) => {
    const subjectPayload = buildSubjectPayload(payload, userId);
    const subject = await Subject.create(subjectPayload);
    return subject;
  },

  getSubjects: async (userId) =>
    Subject.find({ userId }).sort({ semester: 1, subjectCode: 1 }),

  getSubjectById: async (subjectId, userId) => findOwnedSubject(subjectId, userId),

  updateSubject: async (subjectId, userId, payload) => {
    const subject = await findOwnedSubject(subjectId, userId);

    const fields = [
      'subjectName',
      'subjectCode',
      'semester',
      'creditValue',
      'lecturer',
      'description',
    ];

    fields.forEach((field) => {
      if (payload[field] !== undefined) {
        subject[field] = typeof payload[field] === 'string'
          ? payload[field].trim()
          : payload[field];
      }
    });

    subject.overallProgress = calculateOverallProgress(subject);
    await subject.save();

    return subject;
  },

  deleteSubject: async (subjectId, userId) => {
    const subject = await findOwnedSubject(subjectId, userId);
    await subject.deleteOne();
    return { deleted: true };
  },

  updateLearningComponent: async (subjectId, userId, componentType, payload) => {
    const subject = await findOwnedSubject(subjectId, userId);

    subject[componentType] = normalizeLearningComponent({
      ...subject[componentType]?.toObject?.(),
      ...subject[componentType],
      ...payload,
    });
    subject.overallProgress = calculateOverallProgress(subject);

    await subject.save();
    return subject;
  },

  addCaItem: async (subjectId, userId, payload) => {
    const subject = await findOwnedSubject(subjectId, userId);
    subject.continuousAssessments.push(payload);
    subject.overallProgress = calculateOverallProgress(subject);
    await subject.save();
    return subject;
  },

  updateCaItem: async (subjectId, userId, caItemId, payload) => {
    const subject = await findOwnedSubject(subjectId, userId);
    const item = subject.continuousAssessments.id(caItemId);

    if (!item) {
      throw new ApiError(404, 'CA item not found');
    }

    Object.entries(payload).forEach(([key, value]) => {
      item[key] = value;
    });

    subject.overallProgress = calculateOverallProgress(subject);
    await subject.save();
    return subject;
  },

  deleteCaItem: async (subjectId, userId, caItemId) => {
    const subject = await findOwnedSubject(subjectId, userId);
    const item = subject.continuousAssessments.id(caItemId);

    if (!item) {
      throw new ApiError(404, 'CA item not found');
    }

    item.deleteOne();
    subject.overallProgress = calculateOverallProgress(subject);
    await subject.save();
    return subject;
  },

  upsertFinalExam: async (subjectId, userId, payload) => {
    const subject = await findOwnedSubject(subjectId, userId);
    subject.finalExam = {
      ...subject.finalExam?.toObject?.(),
      ...subject.finalExam,
      ...payload,
    };
    subject.overallProgress = calculateOverallProgress(subject);
    await subject.save();
    return subject;
  },
};

