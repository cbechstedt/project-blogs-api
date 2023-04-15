const express = require('express');
const userController = require('../controllers/user.controller');
const { validateCreateUser, authToken } = require('../utils/middlewares');

const router = express.Router();

router.post('/', validateCreateUser, userController.createUser);
router.get('/', authToken, userController.getUsers);
router.get('/:id', authToken, userController.getUserById);  

module.exports = router;