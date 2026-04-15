import mongoose from 'mongoose';

const studyPlanSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    goal: { type: String, default: '' },
    startDate: { type: Date },
    endDate: { type: Date },
    status: { type: String, default: 'active' },
  },
  { timestamps: true },
);

export const StudyPlan = mongoose.model('StudyPlan', studyPlanSchema);

