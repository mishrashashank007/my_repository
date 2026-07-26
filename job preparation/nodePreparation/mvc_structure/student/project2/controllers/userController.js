// The controllers recives the HTTP requests, calls the service, sends HTTP response
const userService = require("../services/userServices");

const createUser = (req, res) => {
    const user = userService.createUser(req.body);
    res.status(201).json(user);
};

module.exports = { createUser };

