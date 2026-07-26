const users = require("../data/users");

const getAllUsers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 100);
    });
};

const getUserById = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users.find(user => user.id == id));
        }, 100);
    });
};

const addUser = async (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            users.push(user);
            resolve(user);
        }, 100);
    });
};

const updateUser = async (id, newUser) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = users.findIndex(user => user.id == id);

            if (index === -1) {
                resolve(null);
                return;
            }

            users[index] = {
                ...users[index],
                ...newUser
            };

            resolve(users[index]);
        }, 100);
    });
};

const deleteUser = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = users.findIndex(user => user.id == id);

            if (index === -1) {
                resolve(null);
                return;
            }

            resolve(users.splice(index, 1)[0]);
        }, 100);
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};