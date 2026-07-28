const express = require('express');

const orderController = require(
  '../controllers/orderController'
);

const {
  authenticateToken,
  authorizeRoles
} = require('../middleware/authMiddleware');

const router = express.Router();

//router.use(authenticateToken);

router.get('/', orderController.getAllOrders);

router.get('/:id', orderController.getOrderById);

router.post('/', orderController.createOrder);

router.put('/:id', orderController.updateOrder);

router.delete(
  '/:id',
 // authorizeRoles('admin'),
  orderController.deleteOrder
);

module.exports = router;