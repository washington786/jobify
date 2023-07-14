const mongoose = require("mongoose");
const validate = require("validator");

const bcrypt = require("bcryptjs");

const schema = mongoose.Schema;

const user = new schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "name field is mandatory"],
    minlength: 3,
    maxlength: 50,
  },

  lastName: {
    type: String,
    trim: true,
    required: [true, "name field is mandatory"],
    minlength: 3,
    maxlength: 50,
  },

  email: {
    type: String,
    trim: true,
    required: [true, "email field is mandatory"],
    validate: {
      validator: validate.isEmail,
      message: "Invalid email address",
    },
    unique: true,
  },

  password: {
    type: String,
    required: [true, "password field is required"],
    minlength: 5,
    select: false,
  },
  isClient: {
    type: Boolean,
  },
  isSubscribed:Boolean,
});

//  encrypting the password of the user creating an account: before saving
user.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// validating the password of the user trying to login
user.methods.passwordValid = async function (password, userPassword) {
  return await bcrypt.compare(password, userPassword);
};

const User = mongoose.model("User", user);

module.exports = User;
