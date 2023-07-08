const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userEmailSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      trim: true,
      minlenghth: 3,
    },
  },
  {
    versionKey: false,
  }
);

const userEmailcheck = mongoose.model("checkuser", userEmailSchema);

module.exports = userEmailcheck;
