// Model ko import kiya taaki data mil sake
const DirectorModel = require('../models/userModel');

// Manager function
const getDirectors = (req, res) => {
  // 1. Model se data manga
  const allDirectors = DirectorModel.getAllDirectors();
  
  // 2. User ko Data bhej diya (Yeh hamara "View" hai API mein)
  res.status(200).json(allDirectors);
};

// Function ko export kiya
module.exports = { getDirectors };