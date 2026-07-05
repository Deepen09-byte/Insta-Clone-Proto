const postModel = require("../models/post.model");
const imageKit = require("@imagekit/nodejs");
const {toFile} = require("@imagekit/nodejs");

const imagekit = new imageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function postController(req, res) {

  console.log(req.body, req.file);

  const file =await imagekit.files.upload({
    file: await toFile (Buffer.from(req.file.buffer),'file'),
    fileName: req.file.originalname
  });

  res.send(file);
}

module.exports = {
  postController
};