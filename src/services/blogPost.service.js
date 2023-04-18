const { BlogPost, Category, User } = require('../models');

const getBlogPosts = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
    }],
  });
  return blogPosts;
};

const getBlogPostById = async (id) => {
  const blogPost = await BlogPost.findOne({
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
    }],
  });
  if (blogPost) return { type: null, message: blogPost };

  return { type: 'error', message: 'Post does not exist' };
};

module.exports = {
  getBlogPosts,
  getBlogPostById,
};