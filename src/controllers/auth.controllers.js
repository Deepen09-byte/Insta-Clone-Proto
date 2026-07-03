const userModel = require("../models/users.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

async function registerController (req, res) {
  const { username, email, password, bio, profileImage } = req.body;

  const ifUserExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (ifUserExists) {
    return res
      .status(409)
      .json({
        message:
          "User already exists" + ifUserExists.email == email
            ? "Email already exists"
            : "Username already exists",
      });
  }

  const hash = crypto.createHash("sha256").update(password).digest("hex");

  const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hash,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token);

  res
    .status(201)
    .json({
      message: "User registered successfully",
      user: {
        username: user.username,
        email: user.email,
        bio: user.bio,
        profileImage: user.profileImage,
      },
    });
};

async function loginController
  (req, res) {
    const { email, username, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const hash = crypto.createHash("sha256").update(password).digest("hex");

  const isPasswordCorrect = hash === user.password;

  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token);

  res
    .status(200)
    .json({
      message: "Login successful",
      user: {
        username: user.username,
        email: user.email,
        bio: user.bio,
        profileImage: user.profileImage,
      },
    });
  };

module.exports = {
  registerController,
  loginController,
};