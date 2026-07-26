const userDao = require("../dao/userDao");

const getUsers = async () => {
    return await userDao.getAllUsers();
};

const getUser = async (id) => {
    return await userDao.getUserById(id);
};

const createUser = async (data) => {

    const user = {
        id: Date.now(),
        name: data.name,
        age: data.age
    };

    return await userDao.addUser(user);
};

const editUser = async (id, data) => {
    return await userDao.updateUser(id, data);
};

const removeUser = async (id) => {
    return await userDao.deleteUser(id);
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    editUser,
    removeUser
};