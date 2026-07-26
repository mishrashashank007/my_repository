const express = require('express');
const router = express.Router();

// Controller ko import kiya
const directorController = require('../controllers/directorController');

// Agar user '/' (yaani base path) par GET request bheje, toh getDirectors chalao
router.get('/', directorController.getDirectors);

module.exports = router;