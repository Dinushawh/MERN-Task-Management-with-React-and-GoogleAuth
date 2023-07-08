const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    password: {
      type: String,
      require: true,
      trim: true,
      minlenghth: 3,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      minlenghth: 3,
    },
    role: {
      type: String,
      require: true,
      trim: true,
      minlenghth: 3,
    },
    fullname: {
      type: String,
      require: true,
      minlenghth: 3,
    },
    googleauth: {
      type: Boolean,
      require: true,
    },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
