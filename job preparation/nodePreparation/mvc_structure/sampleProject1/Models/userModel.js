// Users ka mock database
const users = [
  { id: 101, username: "rahul_coder", subscription: "Premium" },
  { id: 102, username: "amit_dev", subscription: "Free" }
];

// Saare users nikalne ka function
const getAllUsers = () => {
  return users;
};

module.exports = { getAllUsers };