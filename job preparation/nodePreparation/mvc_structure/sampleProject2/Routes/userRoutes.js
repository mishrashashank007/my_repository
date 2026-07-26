const express = require('express');
const app = express();

const router = express.Router();

router.get('/user', userController.getUser());

module.exports = {router};