import { runLinearRegression } from '../../ai/regressionEngine.js';

export const predictionService = {
  generatePrediction: async (_userId) => {
    const result = runLinearRegression([{ score: 72 }, { score: 80 }, { score: 85 }]);

    return {
      ...result,
      factors: ['studyHours', 'attendance', 'previousScore'],
    };
  },
};

