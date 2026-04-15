export const getMyProfile = async (req, res) => {
  res.status(200).json({ success: true, data: req.user });
};

export const updateMyProfile = async (req, res) => {
  res.status(200).json({ success: true, data: req.body });
};

