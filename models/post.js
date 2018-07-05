module.exports = (sequelize, DataTypes) => {
	const Post = sequelize.define("post", {
		description: {
			type: DataTypes.TEXT
		}
	});

	Post.associate = (models) => {
		Post.hasMany(models.Comment);
	}

	return Post;
}