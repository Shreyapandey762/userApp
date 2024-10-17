const user_model = require("../models/userModel");
const form_model = require("../models/formModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const registerController = async (req, res) => {
  try {
    const exisitingUser = await user_model.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = await req.body.password;
    const salt = await bcrypt.genSalt(10);//salt is used for making password more protected
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new user_model(req.body);
    await newUser.save();
    res.status(201).send({ message: "User Registered Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `User Register Controller ${error.message}`,
    });
  }
};

// login callback
const loginController = async (req, res) => {
  try {
    const user = await user_model.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200) //200 denotes OK
        .send({ message: "User not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invalid EMail or Password", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({ message: "User Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in User Login CTRL ${error.message}` });
  }
};

module.exports = {loginController, registerController};