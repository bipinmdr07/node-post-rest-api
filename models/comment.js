module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    comment: {
      type: DataTypes.TEXT
    }
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.Post, {
      foreignKey: 'postId'
    });
  }

  return Comment;
}