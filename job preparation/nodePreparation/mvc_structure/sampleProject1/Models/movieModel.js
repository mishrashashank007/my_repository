// Database ya array
const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "Interstellar" }
];

// Data nikalne ka function
const getAllMovies = () => {
  return movies; 
};

// Is function ko export kar diya taaki dusri file isko use kar sake
module.exports = { getAllMovies };