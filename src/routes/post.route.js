const express = require("express");
const postRouter = express.Router();
const { createPostController } = require("../controllers/post.controller");
const { getPostController } = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

postRouter.post("/", upload.single("image"), createPostController);

postRouter.get("/", getPostController);

module.exports = postRouter;
