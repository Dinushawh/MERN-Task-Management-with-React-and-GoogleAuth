const router = require("express").Router();
let User = require("../models/users.model");
let userEmailcheck = require("../models/checkusers.model");

//RETEIVE DATA FROM THE DATABASE
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// ADD DATA TO THE DATABASE
router.route("/add").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  const fullname = req.body.fullname;
  // username is the name of the field in the form in the frontend
  const newUser = new User({ email, password, role, fullname }); // username is the name of the field in the database

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete data from the database
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
