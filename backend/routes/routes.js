const router = require("express").Router();
let User = require("../models/users.model");

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

// RETRIEVE DATA FROM THE DATABASE USING ID
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
