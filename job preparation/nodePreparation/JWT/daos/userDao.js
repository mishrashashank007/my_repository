const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "../data/users.json");

// Read JSON File
const readUsers = async () => {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
};

// Write JSON File
const writeUsers = async (usersData) => {
    await fs.writeFile(
        filePath,
        JSON.stringify(usersData, null, 4)
    );
};

// Get All Users
const getAllUsers = async () => {
    const usersData = await readUsers();
    return usersData.users;
};

// Find User By Email
const getUserByEmail = async (email) => {
    const usersData = await readUsers();

    return usersData.users.find(
        user => user.email === email
    );
};

// Save New User
const saveUser = async (newUser) => {

    const usersData = await readUsers();

    usersData.users.push(newUser);

    await writeUsers(usersData);

    return newUser;
};

module.exports = {
    getAllUsers,
    getUserByEmail,
    saveUser
};