const express = require('express');
const router = express.Router();

// Controller ko import kiya
const userController = require('../controllers/userController');

// Agar user '/' (yaani base path) par GET request bheje, toh getUsers chalao
router.get('/', userController.getUsers);

module.exports = router;