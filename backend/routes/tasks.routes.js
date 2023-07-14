const taskroutes = require("express").Router();
let Tasks = require("../models/tasks.model");

taskroutes.route("/").get((req, res) => {
  Tasks.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error: " + err));
});

taskroutes.route("/new-task").post((req, res) => {
  const userid = req.body.userid;
  const task = req.body.todo;
  const description = req.body.description;
  const deadline = req.body.deadline;
  const status = req.body.status;
  const priority = req.body.priority;
  const category = req.body.category;
  const subtasks = req.body.subtasks;
  const comments = req.body.comments;

  const addnewtask = new Tasks({
    userid,
    task,
    description,
    deadline,
    status,
    priority,
    category,
    subtasks,
    comments,
  });

  addnewtask
    .save()
    .then(() => res.json("todo-added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = taskroutes;
