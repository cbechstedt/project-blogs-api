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
    return { type: 'error', message: 'Invalid fields' };
  }
};

const createUser = async (displayName, email, password, image) => {
  try {
    const newUser = await User.create({ displayName, email, password, image });
    console.log('Novo usuário', newUser.dataValues);
    const token = generateToken(newUser.dataValues);
    return { type: null, message: token };
  } catch (error) {
    return { type: 'error', message: 'User already registered' };
  }
};

const getUsers = async () => {
  try {
    const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
    return { type: null, message: allUsers };
  } catch (error) {
    return { type: 'error', message: 'Internal error' }
  }
};

module.exports = {
  login,
  createUser,
  getUsers,
};
