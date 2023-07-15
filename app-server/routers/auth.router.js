const express = require("express");

const statusCode = require("http-status-codes");
const User = require("../models/user.model");
const signInJWT = require("../utils/JWT.utils");

const authRouter = express.Router();

authRouter.post("/login", async function (req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.passwordValid(password, user.password))) {
      return res.status(401).json({
        status: "failed",
        message: "Incorrect credentials, either password or email.",
      });
    }

    const token = signInJWT(user._id);
    user.password = undefined;

    res.status(200).json({
      status: "success",
      message: "Successfully logged in to your account. ",
      token: token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "server error",
      message: error.message,
    });
  }
});

authRouter.post("/register", async function (req, res, next) {
  try {
    // get all fields values from the request object body
    const { firstName, lastName, email, password } = req.body;

    if (!firstName && !lastName && !email && !password) {
      throw new Error("Please enter valid fields");
    }

    const _user = { firstName, lastName, email, password };

    const user = await User.create(_user);

    // return the error message if account was not created
    if (!user) {
      return res.status(statusCode.StatusCodes.NOT_ACCEPTABLE).json({
        status: "failed",
        message: "Could not create account",
      });
    }

    const token = signInJWT(user._id);

    // return the success message on success
    res.status(statusCode.StatusCodes.CREATED).json({
      status: "created",
      message: "Account created successfully",
      token: token,
      user,
    });
  } catch (error) {
    res.status(statusCode.StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: "server error",
      message: error.message,
    });
  }
});
authRouter.patch("/update/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select('+password');
    if (!user) {
      return res
      .status(500)
      .json({
        status: "failed",
        message: "Sorry, there was an error. please try again later.",
      });
    }
    const {firstName,lastName,email} = req.body;

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    await user.save();
    
    res.status(200).json({status:"success",message:"User updated successfully.", user});

  } catch (error) {
    return res
      .status(500)
      .json({
        status: "failed",
        message: "Sorry, there was an error. please try again later.",
      });
  }
});

module.exports = authRouter;
