const express = require('express');
const userController = require('../controllers/user.controller');
const { validateLoginFields } = require('../utils/middlewares');

const router = express.Router();

router.post('/', validateLoginFields, userController.login);

module.exports = router;