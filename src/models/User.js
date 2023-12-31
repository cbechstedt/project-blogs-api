module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      tableName: 'users',
      timestamps: false,
      underscored: true,
    });

  UserModel.associate = ({ BlogPost }) => {
    UserModel.hasMany(BlogPost, {
      foreignKey: 'user_id',
      as: 'blog_posts',
    });
  };
  return UserModel
};