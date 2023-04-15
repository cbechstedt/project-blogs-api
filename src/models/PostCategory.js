module.exports = (sequelize, DataTypes) => {
  const PostCategoryModel = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
    {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
    });

  PostCategoryModel.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostCategoryModel,
      as: 'categories',
    });

    Category.belongsToMany(BlogPost, {
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostCategoryModel,
      as: 'blog_posts',
    });
  };
  return PostCategoryModel
};