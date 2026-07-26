// Directors ka mock database
const directors = [
  { id: 1, name: "Christopher Nolan", age: 53, bestMovie: "Interstellar" },
  { id: 2, name: "Steven Spielberg", age: 77, bestMovie: "Jurassic Park" }
];

// Saare directors nikalne ka function
const getAllDirectors = () => {
  return directors;
};

// Kisi ek specific director ko uske ID se nikalne ka function
const getDirectorById = (id) => {
  return directors.find(director => director.id === id);
};

// Dono functions ko export kar diya
module.exports = { getAllDirectors, getDirectorById };