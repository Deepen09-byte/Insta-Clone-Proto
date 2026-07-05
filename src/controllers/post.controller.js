const postModel = require("../models/post.model");

async function postController(req, res) {
  const { userId, caption, imageUrl } = req.body;
};

module.exports = {
  postController
};