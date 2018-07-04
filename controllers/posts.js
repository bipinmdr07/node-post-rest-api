// controller function for showing all posts
exports.index = (req, res) => {
	res.json({
		"index": "posts"
	});
}

// controller function for showing particular post
exports.show = (req, res) => {
	res.json({
		"show": "posts"
	});
}

// controller function for creating new post
exports.create = (req, res) => {
	res.json({
		"create": "posts"
	});
}

// controller function for updating the post
exports.update = (req, res) => {
	res.json({
		"update": "posts"
	});
}

// controller function for deleting the particular post
exports.destroy = (req, res) => {
	res.json({
		"destroy": "posts"
	});
}