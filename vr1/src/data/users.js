const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    name: 'Vivek Gupta',
    email: 'vivek@example.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'admin'
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    password: bcrypt.hashSync('rahul123', 10),
    role: 'user'
  }
];

module.exports = users;