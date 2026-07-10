const postModel = require("../models/post.model");
const imageKit = require("@imagekit/nodejs");
const {toFile} = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new imageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function createPostController(req, res) {

  console.log(req.body, req.file);

  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  let decoded = null;

  try{
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  }
  catch(err) {
    return res.status(401).json({ message: "Invalid token" });
  }

  console.log(decoded);

  const file =await imagekit.files.upload({
    file: await toFile (Buffer.from(req.file.buffer),'file'),
    fileName: req.file.originalname,
    folder: "insta-clone"
  });

    const post = await postModel.create({
    userId: decoded.id,
    caption: req.body.caption,
    imageUrl: file.url,
  });

  res.status(201).json({
    message: "Post created successfully",
    post
  });
}

async function getPostController(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  let decoded = null;

  try{
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  }
  catch(err) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const userId = decoded.id;

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