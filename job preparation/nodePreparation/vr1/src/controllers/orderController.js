const orderService = require('../services/orderService');


const  getAllOrders = (req, res, next) => {
    try {
      res.status(200).json({ success: true, data: orderService.getAllOrders() });
    } catch (error) {
      next(error);
    }
  }

 const getOrderById = (req, res, next) => {
    try {
      console.log("Get Oder bY ID function is caaling");
      
      const order = orderService.getOrderById(Number(req.params.id));
      res.status(200).json({ success: true, data: order });
    } catch (error) {
      next(error);
    }
  }

 const getOrdersByUserId= (req, res, next) => {
    try {
      const orders = orderService.getOrdersByUserId(Number(req.params.userId));
      res.status(200).json({ success: true, data: orders });
    } catch (error) {
      next(error);
    }
  }

 const createOrder = (req, res, next)  => {
    try {
      const order = orderService.createOrder(req.body);
      res.status(201).json({ success: true, message: 'Order created', data: order });
    } catch (error) {
      next(error);
    }
  }

 const updateOrder = (req, res, next) => {
    try {
      const order = orderService.updateOrder(Number(req.params.id), req.body);
      res.status(200).json({ success: true, message: 'Order updated', data: order });
    } catch (error) {
      next(error);
    }
  }

  const deleteOrder = (req, res, next)  => {
    try {
      orderService.deleteOrder(Number(req.params.id));
      res.status(200).json({ success: true, message: 'Order deleted' });
    } catch (error) {
      next(error);
    }
  }


module.exports = {getAllOrders,deleteOrder,updateOrder,createOrder,getOrdersByUserId,getOrderById}
