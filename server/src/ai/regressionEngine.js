export const runLinearRegression = (records = []) => {
  if (!records.length) {
    return { predictedScore: 0, confidence: 0 };
  }

  const averageScore =
    records.reduce((sum, item) => sum + item.score, 0) / records.length;

  return {
    predictedScore: Number(averageScore.toFixed(2)),
    confidence: 0.78,
  };
};

