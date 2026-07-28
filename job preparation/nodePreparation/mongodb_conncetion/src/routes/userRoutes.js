const express = require('express');

const userController = require(
  '../controllers/userController'
);

const {
  authenticateToken,
  authorizeRoles
} = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authenticateToken);

router.get(
  '/',
 // authorizeRoles('admin'),
  userController.getAllUsers
);

router.get(
  '/:id',
  userController.getUserById
);

router.post(
  '/',
 // authorizeRoles('admin'),
  userController.createUser
);

router.put(
  '/:id',
 // authorizeRoles('admin'),
  userController.updateUser
);

router.delete(
  '/:id',
  //authorizeRoles('admin'),
  userController.deleteUser
);

module.exports = router;