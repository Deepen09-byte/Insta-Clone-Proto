const postModel = require("../models/post.model");
const imageKit = require("@imagekit/nodejs");
const {toFile} = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new imageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function createPostController(req, res) {

  const file =await imagekit.files.upload({
    file: await toFile (Buffer.from(req.file.buffer),'file'),
    fileName: req.file.originalname,
    folder: "insta-clone"
  });

    const post = await postModel.create({
    userId: req.user.id,
    caption: req.body.caption,
    imageUrl: file.url,
  });

  res.status(201).json({
    message: "Post created successfully",
    post
  });
}

async function getPostController(req, res) {

  const userId = req.user.id;

  const posts = await postModel.find({ userId: userId });

  res.status(200).json({
    message: "Posts retrieved successfully",
    posts
  });
}

module.exports = {
  createPostController,
  getPostController
};