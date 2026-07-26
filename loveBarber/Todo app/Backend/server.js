const express = require('express');
const app = express();

//load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000; 

//middleware to parse JSON requests
app.use(express.json());

//import routes for TODO APIs
const todoRoutes = require('./routes/todos');
//mount the TODO to API routes
app.use('/api/todos', todoRoutes);

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//connect to database 
const connectDB = require('./config/database');
connectDB();

//default Route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the HOMEPAGE</h1>');
});