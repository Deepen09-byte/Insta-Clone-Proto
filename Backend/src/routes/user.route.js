const express = require("express");
const userController = require("../controllers/user.controller");
const identifyUser = require("../middlewares/auth.middleware");

const useRouter = express.Router();

useRouter.post("/follow/:username",identifyUser,userController.followUserController);
useRouter.post("/unfollow/:username",identifyUser,userController.unfollowUserController);

module.exports = useRouter;