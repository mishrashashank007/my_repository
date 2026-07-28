const express = require('express');
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/login', authController.login);

// router.get(
//   '/profile',
//   authenticateToken,
//   authController.getProfile
// );

module.exports = router;