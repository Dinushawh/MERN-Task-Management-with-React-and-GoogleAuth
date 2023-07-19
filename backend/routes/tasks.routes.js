const taskroutes = require("express").Router();
let Tasks = require("../models/tasks.model");

taskroutes.route("/").get((req, res) => {
  Tasks.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error: " + err));
});

taskroutes.route("/new-task").post((req, res) => {
  const userid = req.body.userid;
  const task = req.body.task;
  const description = req.body.description;
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  const status = req.body.status;
  const priority = req.body.priority;
  const category = req.body.category;
  const subtasks = req.body.subtasks;
  const comments = req.body.comments;

  const addnewtask = new Tasks({
    userid,
    task,
    description,
    startdate,
    enddate,
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

//delete task
taskroutes.route("/delete/:id").delete((req, res) => {
  Tasks.findByIdAndDelete(req.params.id)
    .then(() => res.json("task-deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = taskroutes;
