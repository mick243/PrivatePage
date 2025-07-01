const express = require("express");
const { getAllPosts, getPostById } = require("../controller/post");
const router = express.Router();

router.get("/", getAllPosts);
router.get("/:post_id", getPostById);

module.exports = router;
