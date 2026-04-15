export const getOverview = async (_req, res) => {
  res.status(200).json({
    success: true,
    data: {
      totalStudyHours: 0,
      completedTasks: 0,
      averageScore: 0,
    },
  });
};

export const createRecord = async (req, res) => {
  res.status(201).json({ success: true, data: req.body });
};

