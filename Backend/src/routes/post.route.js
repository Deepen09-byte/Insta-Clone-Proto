const express = require("express");
const postRouter = express.Router();
const { createPostController } = require("../controllers/post.controller");
const { getPostController } = require("../controllers/post.controller");
const { likePostController } = require("../controllers/post.controller");
const identifyUser = require("../middlewares/auth.middleware");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

postRouter.post("/", upload.single("image"), identifyUser, createPostController);

postRouter.get("/", identifyUser, getPostController);

postRouter.post("/like/:postId", identifyUser, likePostController);

module.exports = postRouter;
