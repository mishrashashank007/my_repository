// code 1: single file code without MVC
const express = require('express');
const app = express();

// 1. Data (Model)
const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "Interstellar" }
];

// 2. Route aur Logic (Controller + Route)
app.get('/api/movies', (req, res) => {
  res.status(200).json(movies);
});

// 3. Server start
const port = 3000;
app.listen(port, () => {
    console.log(`Register wali dukaan shuru: http://localhost:${port}/api/movies`);
});
