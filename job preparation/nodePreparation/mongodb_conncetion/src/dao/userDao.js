const User = require('../models/User');

const findAll = async () => {
      console.log('getAllUsers Dao');
  return await  User.find()
    .select('-password')
    .sort({ createdAt: -1 });
};

const findById = async (userId) => {
  return User.findById(userId).select('-password');
};

const findByEmail = async (
  email,
  includePassword = false
) => {
  let query = User.findOne({
    email: email.toLowerCase()
  });

  if (includePassword) {
    query = query.select('+password');
  }

  return query;
};

const create = async (userData) => {
  return User.create(userData);
};

const updateById = async (userId, updateData) => {
  return User.findByIdAndUpdate(
    userId,
    updateData,
    {
      new: true,
      runValidators: true
    }
  ).select('-password');
};

const deleteById = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
  updateById,
  deleteById
};