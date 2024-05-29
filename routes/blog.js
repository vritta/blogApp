const express = require("express");
const router = express.Router();

//import controller
const { likePost, unlikePost } = require("../controllers/likeController");
const {createComment} = require("../controllers/commentController");
const {createPost, getAllPosts} = require("../controllers/postController");

//mapping create
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

router.post("/comments/create", createComment);

router.post("/posts/create", createPost);
router.get("/posts/get", getAllPosts);

//export
module.exports = router;