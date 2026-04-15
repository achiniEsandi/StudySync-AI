export const register = async (_req, res) => {
  res.status(201).json({
    success: true,
    message: 'Register endpoint placeholder',
  });
};

export const login = async (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Login endpoint placeholder',
  });
};

export const getCurrentUser = async (req, res) => {
  res.status(200).json({
    success: true,
    data: req.user || null,
  });
};

