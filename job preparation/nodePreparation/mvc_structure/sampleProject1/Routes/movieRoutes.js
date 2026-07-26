const express = require('express');
const router = express.Router();

// Controller ko import kiya
const movieController = require('../controllers/movieController');

// Agar user '/' (yaani base path) par GET request bheje, toh getMovies chalao
router.get('/', movieController.getMovies);

module.exports = router;