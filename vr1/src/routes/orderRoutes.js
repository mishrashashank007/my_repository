const express = require('express');
const orderController = require('../controllers/orderController');

const {
  authenticateToken,
  authorizeRoles,test
} = require('../middleware/authMiddleware.js');

const router = express.Router();

router.get(
  '/',
  authenticateToken,
  orderController.getAllOrders
);

router.get(
  '/user/:userId',
  authenticateToken,
  orderController.getOrdersByUserId
);

router.get('/:id',authenticateToken,test,orderController.getOrderById);

router.post(
  '/',
  authenticateToken,
  orderController.createOrder
);

router.put(
  '/:id',
  authenticateToken,
  orderController.updateOrder
);

router.delete(
  '/:id',
  authenticateToken,
  authorizeRoles('admin'),
  orderController.deleteOrder
);

module.exports = router;