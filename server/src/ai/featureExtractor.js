export const featureExtractor = (record) => ({
  studyHours: record.studyHours || 0,
  attendance: record.attendance || 0,
  previousScore: record.previousScore || 0,
});

