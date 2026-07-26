const express = require("express");

const router = express.Router();

const {
    showAllUsers,
    showAllEmails,
    showUserEmail,
    showUserPassword
} = require("../controllers/userController");

// Get all users
router.get("/users", showAllUsers);

// Get all emails
router.get("/users/emails", showAllEmails);

// Get email by user id
router.get("/users/:id/email", showUserEmail);

// Get password by user id (Learning Purpose Only)
router.get("/users/:id/password", showUserPassword);

module.exports = router;