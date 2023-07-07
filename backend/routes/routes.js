const { Router } = require("express");
const { get } = require("mongoose");
const { getRoutes } = require("../controllers/taskcontrollers");
const router = Router();

router.get("/get", getRoutes);

module.exports = router;
