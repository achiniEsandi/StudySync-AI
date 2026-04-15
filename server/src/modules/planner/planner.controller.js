export const listPlans = async (_req, res) => {
  res.status(200).json({ success: true, data: [] });
};

export const createPlan = async (req, res) => {
  res.status(201).json({ success: true, data: req.body });
};

