const { validateToken } = require('./auth');

const validateLoginFields = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateCreateUser = (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }

  if (password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

const authToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = validateToken(authorization);
    req.user = token;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const validateCreateCategory = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ message: '"name" is required' });
  }
  next();
};

module.exports = {
  validateLoginFields,
  validateCreateUser,
  validateToken,
  authToken,
  validateCreateCategory,
};
