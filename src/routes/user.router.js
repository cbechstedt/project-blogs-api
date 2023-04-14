const express = require('express');
const userController = require('../controllers/user.controller');
const { validateCreateUser } = require('../utils/middlewares');

const router = express.Router();

router.post('/', validateCreateUser, userController.createUser);

module.exports = router;