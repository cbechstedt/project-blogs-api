const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const configJWT = {
  expiresIn: '7d',
  algorithm: 'HS256'
};

const generateToken = (payload) => {
  const token = jwt.sign(payload, secret, configJWT);
  return token;
}

module.exports = {
  generateToken,
}
