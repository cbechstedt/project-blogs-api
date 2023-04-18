const express = require('express');
const blogPostController = require('../controllers/blogPost.controller');
const { authToken } = require('../utils/middlewares');

const router = express.Router();

router.get('/', authToken, blogPostController.getBlogPosts);
router.get('/:id', authToken, blogPostController.getBlogPostById);

module.exports = router;