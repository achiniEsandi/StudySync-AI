export const protect = (req, _res, next) => {
  req.user = {
    id: 'demo-user-id',
    role: 'student',
    email: 'student@example.com',
  };
  next();
};

