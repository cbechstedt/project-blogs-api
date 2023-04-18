const { Category } = require('../models');

const createCategory = async (name) => {
  try {
    const newCategory = await Category.create({ name });
    return { type: null, message: newCategory };
  } catch (error) {
    return { type: 'error', message: 'Category already registered' };
  }
};

const getCategories = async () => {
  const categories = await Category.findAll({ order: [
    ['id', 'ASC'],
] });
  return categories;
};

module.exports = {
  createCategory,
  getCategories,
};