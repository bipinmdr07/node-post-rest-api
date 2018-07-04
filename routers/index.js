const express = require('express');
const router = express.Router();
const postsController = require("../controllers/posts");
const commentsController = require("../controllers/comments");

// routers for posts
router.route("/posts")
	.get(postsController.index)
	.post(postsController.create);

router.get("/posts/:id", postsController.show);
router.put("/posts/:id", postsController.update);
router.delete("/posts/:id", postsController.destroy);

// routers for comment
router.route("/comments")
	.get(commentsController.index)
	.post(commentsController.create);

router.put("/comments/:id", commentsController.update);
router.delete("/posts/:id", commentsController.destroy);

module.exports = router;