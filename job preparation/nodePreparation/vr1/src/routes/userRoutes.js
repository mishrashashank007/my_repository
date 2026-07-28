const express = require('express');
const userController = require('../controllers/userController');

const {
  authenticateToken,
  authorizeRoles
} = require('../middleware/authMiddleware');

const router = express.Router();

// सभी logged-in users access कर सकते हैं
router.get(
  '/',
  authenticateToken,
  userController.getAllUsers
);

router.get(
  '/:id',
  authenticateToken,
  userController.getUserById
);

// केवल admin create, update और delete कर सकता है
router.post(
  '/',
  authenticateToken,
  authorizeRoles('admin'),
  userController.createUser
);

router.put(
  '/:id',
  authenticateToken,
  authorizeRoles('admin'),
  userController.updateUser
);

router.delete(
  '/:id',
  authenticateToken,
  authorizeRoles('admin'),
  userController.deleteUser
);

module.exports = router;