export const protect = (req, _res, next) => {
  req.user = {
    id: '507f1f77bcf86cd799439011',
    role: 'student',
    email: 'student@example.com',
  };
  next();
};
