const express = require('express');
const blogPostController = require('../controllers/blogPost.controller');
const { authToken } = require('../utils/middlewares');

const router = express.Router();

router.get('/', authToken, blogPostController.getBlogPosts);

module.exports = router;