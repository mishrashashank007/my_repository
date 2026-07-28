const orderDao = require('../dao/orderDao');
const userDao = require('../dao/userDao');


  const getAllOrders= () => {
    return orderDao.findAll();
  }

  const getOrderById = (id) =>  {
    const order = orderDao.findById(id);
    if (!order) {
      const error = new Error('Order not found');
      error.statusCode = 404;
      throw error;
    }
    return order;
  }

  const getOrdersByUserId= (userId) => {
    if (!userDao.findById(userId)) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }

    return orderDao.findByUserId(userId);
  }

 const  createOrder =(orderData) =>  {
    const { userId, product, quantity } = orderData;

    if (!userId || !product || !quantity) {
      const error = new Error('userId, product and quantity are required');
      error.statusCode = 400;
      throw error;
    }

    if (!Number.isInteger(userId) || !Number.isInteger(quantity) || quantity <= 0) {
      const error = new Error('userId and quantity must be valid integers');
      error.statusCode = 400;
      throw error;
    }

    if (!userDao.findById(userId)) {
      const error = new Error('Cannot create order: user not found');
      error.statusCode = 404;
      throw error;
    }

    return orderDao.create({ userId, product, quantity });
  }

  const updateOrder = (id, orderData) => {
    this.getOrderById(id);

    if (orderData.userId && !userDao.findById(orderData.userId)) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }

    return orderDao.update(id, orderData);
  }

  const deleteOrder =(id) => {
    this.getOrderById(id);
    orderDao.deleteOrder(id);
  }


module.exports = {deleteOrder,updateOrder,createOrder,getOrdersByUserId,getOrderById,getAllOrders}
