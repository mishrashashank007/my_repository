// It just interacts with data. This manages or functions only CRUD operations.

const userData = require('../data/users');

const getAllUsers = ()=>{
    return userData.users;
}

const getUserById = (id)=>{
    return userData.users.find(user => user.id == id);
}
const addUser = (user) => {
    userData.users.push(user);
    return user;
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser
}