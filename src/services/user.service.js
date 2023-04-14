const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const login = async (email, password) => {
  try {
    const user = await User.findOne({
      where: { email, password },
    });
  
    const token = generateToken(user.dataValues);
    return { type: null, message: token };
  } catch (error) {
    return { type: 'error', message: 'Invalid fields' }
  }
}

module.exports = {
  login,
}
