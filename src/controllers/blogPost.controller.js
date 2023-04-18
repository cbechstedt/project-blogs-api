const blogPostsService = require('../services/blogPost.service');

const getBlogPosts = async (req, res) => {
  const blogPosts = await blogPostsService.getBlogPosts();
  return res.status(200).json(blogPosts);
};

module.exports = {
  getBlogPosts,
};