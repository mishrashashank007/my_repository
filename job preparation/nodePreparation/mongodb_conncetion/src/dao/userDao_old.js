const users = require('../data/users');

class UserDao {
  findAll() {
    return users;
  }

  findById(id) {
    return users.find((user) => user.id === id);
  }

  findByEmail(email) {
    return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
  }

  create(userData) {
    const nextId = users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1;
    const newUser = { id: nextId, ...userData };
    users.push(newUser);
    return newUser;
  }

  update(id, userData) {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return null;

    users[index] = { ...users[index], ...userData, id };
    return users[index];
  }

  delete(id) {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    users.splice(index, 1);
    return true;
  }
}

module.exports = new UserDao();
