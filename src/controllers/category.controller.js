const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await categoryService.createCategory(name);
  if (type) {
    return res.status(409).json(message);
  }
  return res.status(201).json(message);
};

const getCategories = async (req, res) => {
  const categories = await categoryService.getCategories();
  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getCategories,
};