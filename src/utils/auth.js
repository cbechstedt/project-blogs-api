const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const configJWT = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign(payload, secret, configJWT);
  return token;
};

const validateToken = (token) => {
  // if (!token) throw 'Expired or invalid token';
  const isValid = jwt.verify(token, secret);
  return isValid;
}

module.exports = {
  generateToken,
  validateToken,
};
