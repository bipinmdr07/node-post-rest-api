// controller function for showing all comments on the particular post
exports.index = (req, res) => {
	res.json({
		"index": "comments"
	});
}

// controller function for creating new comment on particular post
exports.create = (req, res) => {
	res.json({
		"create": "comments"
	});
}

// controller function for updating the comment
exports.update = (req, res) => {
	res.json({
		"update": "comments"
	});
}

// controller function for deleting the comment on the particular post
exports.destroy = (req, res) => {
	res.json({
		"destroy": "comments"
	});
}