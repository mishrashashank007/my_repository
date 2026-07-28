// const userRoutes = require("./userRoutes");
// const orderRoutes = require("./orderRoutes");

// module.exports = (app) => {
//     app.use("/api/users", userRoutes);
//     app.use("/api/orders", orderRoutes);
// };



const express = require('express');

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);

module.exports = router;