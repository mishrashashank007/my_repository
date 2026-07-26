// it deals with the business logic

const {
    getAllUsers,
    getUserById,
    getUserByEmail
} = require("../dao/userDao");

const allUsers = () => {
    return getAllUsers();
};

const findUserById = (id) => {

    if (!id) {
        throw new Error("User ID is required.");
    }

    const user = getUserById(id);

    if (!user) {
        throw new Error("User not found.");
    }

    return user;
};

const findUserByEmail = (email) => {

    if (!email) {
        throw new Error("Email is required.");
    }

    const user = getUserByEmail(email);

    if (!user) {
        throw new Error("User not found.");
    }

    return user;
};

module.exports = {
    allUsers,
    findUserById,
    findUserByEmail
};