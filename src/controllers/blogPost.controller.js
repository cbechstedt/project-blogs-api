const blogPostsService = require('../services/blogPost.service');

const getBlogPosts = async (req, res) => {
  const blogPosts = await blogPostsService.getBlogPosts();
  return res.status(200).json(blogPosts);
};

const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await blogPostsService.getBlogPostById(id);

  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(200).json(message);
};

module.exports = {
  getBlogPosts,
  getBlogPostById,
};