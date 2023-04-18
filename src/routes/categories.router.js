const express = require('express');
const categoryController = require('../controllers/category.controller');
const { authToken, validateCreateCategory } = require('../utils/middlewares');

const router = express.Router();

router.post('/', validateCreateCategory, authToken, categoryController.createCategory);
router.get('/', authToken, categoryController.getCategories);

module.exports = router;