const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    userid: {
      type: String,
      require: true,
      trim: true,
      minlenghth: 3,
    },
    task: {
      type: String,
      require: true,
      trim: true,
      minlenghth: 3,
    },
    description: {
      type: String,
      require: true,
      trim: true,
      minlenghth: 3,
    },
    deadline: {
      type: String,
      require: true,
      trim: true,
      minlenghth: 3,
    },
    status: {
      type: String,
      require: true,
      trim: true,
      minlenghth: 3,
    },
    priority: {
      type: String,
      require: true,
      trim: true,
      minlenghth: 3,
    },
    category: {
      type: String,
      require: true,
      trim: true,
      minlenghth: 3,
    },
    subtasks: {
      type: String,
      require: true,
      trim: true,
      minlenghth: 3,
    },
    comments: {
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

const Tasks = mongoose.model("tasks", taskSchema);

module.exports = Tasks;
