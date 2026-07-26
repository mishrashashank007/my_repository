// Model ko import kiya taaki data mil sake
const MovieModel = require('../models/movieModel');

// Manager function
const getMovies = (req, res) => {
  // 1. Model se data manga
  const allMovies = MovieModel.getAllMovies();
  
  // 2. User ko Data bhej diya (Yeh hamara "View" hai API mein)
  res.status(200).json(allMovies);
};

// Function ko export kiya
module.exports = { getMovies };