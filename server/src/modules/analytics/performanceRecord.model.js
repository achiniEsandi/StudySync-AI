import mongoose from 'mongoose';

const performanceRecordSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subject: { type: String, required: true },
    studyHours: { type: Number, required: true },
    attendance: { type: Number, required: true },
    previousScore: { type: Number, required: true },
    score: { type: Number, required: true },
    recordedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const PerformanceRecord = mongoose.model(
  'PerformanceRecord',
  performanceRecordSchema,
);

