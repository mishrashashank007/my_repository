const userService = require('../services/userService');

const getAllUsers = (req, res, next) => {
  try {
    const users = userService.getAllUsers();

    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    next(error);
  }
};

const getUserById = (req, res, next) => {
  try {
    const user = userService.getUserById(Number(req.params.id));

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

const createUser = (req, res, next) => {
  try {
    const user = userService.createUser(req.body);

    res.status(201).json({
      success: true,
      message: "User created",
      data: user
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = (req, res, next) => {
  try {
    const user = userService.updateUser(Number(req.params.id), req.body);

    res.status(200).json({
      success: true,
      message: "User updated",
      data: user
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = (req, res, next) => {
  try {
    userService.deleteUser(Number(req.params.id));

    res.status(200).json({
      success: true,
      message: "User deleted"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};