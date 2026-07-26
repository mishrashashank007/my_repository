const express = require("express");
const router = express.Router();

//import controllers
const createBlog = require("../controllers/createBlog");
const createBlog = require("../controllers/retreiveBlog")

//define APIs
router.post("/createBlog", createBlog);

module.exports = router;
    