const userService = require('../services/user.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await userService.login(email, password);

  if (type) {
    return res.status(400).json({ message });
  }

  return res.status(200).json({ token: message });
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message } = await userService.createUser(displayName, email, password, image);

  if (type) {
    return res.status(409).json({ message });
  }

  return res.status(201).json({ token: message });
};

module.exports = {
  login,
  createUser,
};
