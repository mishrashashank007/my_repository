// Model ko import kiya taaki data mil sake
const UserModel = require('../models/userModel');

// Manager function
const getUsers = (req, res) => {
  // 1. Model se data manga
  const allUsers = UserModel.getAllUsers();
  
  // 2. User ko Data bhej diya (Yeh hamara "View" hai API mein)
  res.status(200).json(allUsers);
};

// Function ko export kiya
module.exports = { getUsers };