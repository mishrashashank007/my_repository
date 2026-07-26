// The controller receives the HTTP request,
// calls the service layer,
// and sends the HTTP response.

const {
    allUsers,
    allEmails,
    userEmail,
    userPassword
} = require("../services/userServices");

// GET /users
const showAllUsers = (req, res) => {

    try {

        const users = allUsers();

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// GET /users/emails
const showAllEmails = (req, res) => {

    try {

        const emails = allEmails();

        res.status(200).json(emails);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// GET /users/:id/email
const showUserEmail = (req, res) => {

    try {

        const id = Number(req.params.id);

        const email = userEmail(id);

        res.status(200).json({
            email
        });

    } catch (error) {

        res.status(404).json({
            message: error.message
        });

    }

};

// GET /users/:id/password
const showUserPassword = (req, res) => {

    try {

        const id = Number(req.params.id);

        const password = userPassword(id);

        res.status(200).json({
            password
        });

    } catch (error) {

        res.status(404).json({
            message: error.message
        });

    }

};

module.exports = {
    showAllUsers,
    showAllEmails,
    showUserEmail,
    showUserPassword
};