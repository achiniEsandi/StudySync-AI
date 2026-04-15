import mongoose from 'mongoose';

const studyTaskSchema = new mongoose.Schema(
  {
    planId: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyPlan', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subject: { type: String, required: true },
    topic: { type: String, required: true },
    scheduledDate: { type: Date, required: true },
    durationMinutes: { type: Number, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const StudyTask = mongoose.model('StudyTask', studyTaskSchema);

