const { Category } = require('../models');

const createCategory = async (name) => {
  try {
    const newCategory = await Category.create({ name });
    return { type: null, message: newCategory };
  } catch (error) {
    return { type: 'error', message: 'Category already registered' };
  }
};

module.exports = {
  createCategory,
};