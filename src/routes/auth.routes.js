const express = require("express");
// const crypto = require("crypto");
// const userModel = require("../models/users.model");
// const jwt = require("jsonwebtoken");
const authController = require("../controllers/auth.controllers")

const authRouter = express.Router();

authRouter.post("/register", authController.registerController);

authRouter.post("/login", authController.loginController);

module.exports = authRouter;
