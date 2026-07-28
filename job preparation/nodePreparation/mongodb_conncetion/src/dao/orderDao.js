const Order = require('../models/Order');

const findAll =  () => {
  return  Order.find()
    //.populate('userId', 'name email role')
    .sort({ createdAt: -1 });
};

const findById = async (orderId) => {
  return await Order.findById(orderId)
    .populate('userId', 'name email role');
};

const findByUserId = async (userId) => {
  return Order.find({ userId })
    .populate('userId', 'name email role')
    .sort({ createdAt: -1 });
};

const create = async (orderData) => {
  return Order.create(orderData);
};

const updateById = async (orderId, updateData) => {
  return Order.findByIdAndUpdate(
    orderId,
    updateData,
    {
      new: true,
      runValidators: true
    }
  ).populate('userId', 'name email role');
};

const deleteById = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
};

module.exports = {
  findAll,
  findById,
  findByUserId,
  create,
  updateById,
  deleteById
};