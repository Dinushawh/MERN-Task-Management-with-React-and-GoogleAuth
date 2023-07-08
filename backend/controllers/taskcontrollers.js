const TaskModel = require("../models/taskmodel");

module.exports.getRoutes = async (req, res) => {
  // try {
  //     const tasks = await TaskModel.find();
  //     res.status(200).json(tasks);
  // } catch (error) {
  //     res.status(404).json({ message: error.message });
  // }
  res.send("Hello World!");
};
