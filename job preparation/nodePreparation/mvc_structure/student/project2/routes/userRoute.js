// connect the end point to the controller.It decides which controller should run.
const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
router.post("/create", controller.createUser);
module.exports = router;
