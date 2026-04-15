import { ApiError } from '../../utils/ApiError.js';
import {
  CA_STATUS,
  CA_TYPES,
  FINAL_EXAM_STATUS,
  LEARNING_COMPONENT_KEYS,
  LEARNING_STATUS,
  PREPARATION_LEVEL,
} from './subject.constants.js';

const assert = (condition, message, statusCode = 400) => {
  if (!condition) {
    throw new ApiError(statusCode, message);
  }
};

const isNonEmptyString = (value) =>
  typeof value === 'string' && value.trim().length > 0;

const isNumber = (value) => typeof value === 'number' && !Number.isNaN(value);

const validateOptionalNumber = (value, fieldName, min = 0, max = Infinity) => {
  if (value === undefined) {
    return;
  }

  assert(isNumber(value), `${fieldName} must be a number`);
  assert(value >= min, `${fieldName} must be at least ${min}`);
  assert(value <= max, `${fieldName} must be at most ${max}`);
};

export const validateCreateSubject = (payload) => {
  assert(isNonEmptyString(payload.subjectName), 'subjectName is required');
  assert(isNonEmptyString(payload.subjectCode), 'subjectCode is required');
  assert(isNonEmptyString(payload.semester), 'semester is required');
  assert(isNumber(payload.creditValue), 'creditValue is required');
  validateOptionalNumber(payload.creditValue, 'creditValue', 0);
};

export const validateUpdateSubject = (payload) => {
  if (payload.subjectName !== undefined) {
    assert(isNonEmptyString(payload.subjectName), 'subjectName must be a string');
  }
  if (payload.subjectCode !== undefined) {
    assert(isNonEmptyString(payload.subjectCode), 'subjectCode must be a string');
  }
  if (payload.semester !== undefined) {
    assert(isNonEmptyString(payload.semester), 'semester must be a string');
  }
  if (payload.lecturer !== undefined) {
    assert(typeof payload.lecturer === 'string', 'lecturer must be a string');
  }
  if (payload.description !== undefined) {
    assert(typeof payload.description === 'string', 'description must be a string');
  }
  validateOptionalNumber(payload.creditValue, 'creditValue', 0);
};

export const validateLearningComponentType = (componentType) => {
  assert(
    LEARNING_COMPONENT_KEYS.includes(componentType),
    'Invalid learning component type',
    404,
  );
};

export const validateLearningComponentPayload = (payload) => {
  validateOptionalNumber(payload.plannedHours, 'plannedHours', 0);
  validateOptionalNumber(payload.completedHours, 'completedHours', 0);
  validateOptionalNumber(payload.totalSessions, 'totalSessions', 0);
  validateOptionalNumber(payload.completedSessions, 'completedSessions', 0);

  if (payload.status !== undefined) {
    assert(
      LEARNING_STATUS.includes(payload.status),
      'status must be Not Started, Ongoing, or Completed',
    );
  }

  if (payload.notes !== undefined) {
    assert(typeof payload.notes === 'string', 'notes must be a string');
  }

  if (
    payload.plannedHours !== undefined &&
    payload.completedHours !== undefined
  ) {
    assert(
      payload.completedHours <= payload.plannedHours,
      'completedHours cannot exceed plannedHours',
    );
  }

  if (
    payload.totalSessions !== undefined &&
    payload.completedSessions !== undefined
  ) {
    assert(
      payload.completedSessions <= payload.totalSessions,
      'completedSessions cannot exceed totalSessions',
    );
  }
};

export const validateCreateCaItem = (payload) => {
  assert(isNonEmptyString(payload.title), 'title is required');
  assert(CA_TYPES.includes(payload.type), 'type is invalid');
  assert(payload.dueDate, 'dueDate is required');
  validateOptionalNumber(payload.weight, 'weight', 0, 100);
  assert(payload.weight !== undefined, 'weight is required');
  validateOptionalNumber(payload.marksObtained, 'marksObtained', 0);
  validateOptionalNumber(payload.totalMarks, 'totalMarks', 0);

  if (payload.status !== undefined) {
    assert(CA_STATUS.includes(payload.status), 'status is invalid');
  }

  if (
    payload.totalMarks !== undefined &&
    payload.marksObtained !== undefined
  ) {
    assert(
      payload.marksObtained <= payload.totalMarks,
      'marksObtained cannot exceed totalMarks',
    );
  }
};

export const validateUpdateCaItem = (payload) => {
  if (payload.title !== undefined) {
    assert(isNonEmptyString(payload.title), 'title must be a string');
  }
  if (payload.type !== undefined) {
    assert(CA_TYPES.includes(payload.type), 'type is invalid');
  }
  if (payload.feedbackOrNotes !== undefined) {
    assert(
      typeof payload.feedbackOrNotes === 'string',
      'feedbackOrNotes must be a string',
    );
  }
  validateOptionalNumber(payload.weight, 'weight', 0, 100);
  validateOptionalNumber(payload.marksObtained, 'marksObtained', 0);
  validateOptionalNumber(payload.totalMarks, 'totalMarks', 0);

  if (payload.status !== undefined) {
    assert(CA_STATUS.includes(payload.status), 'status is invalid');
  }
};

export const validateFinalExam = (payload) => {
  validateOptionalNumber(payload.weight, 'weight', 0, 100);
  validateOptionalNumber(payload.syllabusCoverage, 'syllabusCoverage', 0, 100);
  validateOptionalNumber(payload.predictedMark, 'predictedMark', 0, 100);

  if (payload.preparationLevel !== undefined) {
    assert(
      PREPARATION_LEVEL.includes(payload.preparationLevel),
      'preparationLevel is invalid',
    );
  }

  if (payload.status !== undefined) {
    assert(FINAL_EXAM_STATUS.includes(payload.status), 'status is invalid');
  }
};

