import mongoose from 'mongoose';
import {
  CA_STATUS,
  CA_TYPES,
  FINAL_EXAM_STATUS,
  LEARNING_STATUS,
} from './subject.constants.js';

const learningComponentSchema = new mongoose.Schema(
  {
    plannedHours: { type: Number, default: 0, min: 0 },
    completedHours: { type: Number, default: 0, min: 0 },
    totalSessions: { type: Number, default: 0, min: 0 },
    completedSessions: { type: Number, default: 0, min: 0 },
    progressPercentage: { type: Number, default: 0, min: 0, max: 100 },
    status: {
      type: String,
      enum: LEARNING_STATUS,
      default: 'Not Started',
    },
    notes: { type: String, default: '' },
  },
  { _id: false },
);

const caItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    type: { type: String, enum: CA_TYPES, required: true },
    dueDate: { type: Date, required: true },
    weight: { type: Number, required: true, min: 0, max: 100 },
    marksObtained: { type: Number, default: 0, min: 0 },
    totalMarks: { type: Number, default: 0, min: 0 },
    status: {
      type: String,
      enum: CA_STATUS,
      default: 'Upcoming',
    },
    feedbackOrNotes: { type: String, default: '' },
  },
  { timestamps: true },
);

const finalExamSchema = new mongoose.Schema(
  {
    examDate: { type: Date, default: null },
    weight: { type: Number, default: 0, min: 0, max: 100 },
    syllabusCoverage: { type: Number, default: 0, min: 0, max: 100 },
    preparationLevel: {
      type: String,
      enum: PREPARATION_LEVEL,
      default: 'Moderate',
    },
    predictedMark: { type: Number, default: 0, min: 0, max: 100 },
    status: {
      type: String,
      enum: FINAL_EXAM_STATUS,
      default: 'Not Started',
    },
  },
  { _id: false },
);

const subjectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    subjectName: { type: String, required: true, trim: true },
    subjectCode: { type: String, required: true, trim: true },
    semester: { type: String, required: true, trim: true },
    creditValue: { type: Number, required: true, min: 0 },
    lecturer: { type: String, default: '', trim: true },
    description: { type: String, default: '' },
    overallProgress: { type: Number, default: 0, min: 0, max: 100 },
    lectures: { type: learningComponentSchema, default: () => ({}) },
    tutorials: { type: learningComponentSchema, default: () => ({}) },
    labs: { type: learningComponentSchema, default: () => ({}) },
    continuousAssessments: { type: [caItemSchema], default: [] },
    finalExam: { type: finalExamSchema, default: () => ({}) },
  },
  { timestamps: true },
);

subjectSchema.index({ userId: 1, subjectCode: 1 }, { unique: true });

export const Subject = mongoose.model('Subject', subjectSchema);

