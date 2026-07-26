// Block 1: Dukaan ke Tools Lana
const express = require('express'); 
const app = express(); // 'app' humari dukaan (server) hai

// Block 2 & 3: Samaan aur Rasta (Express mein ye ek sath hote hain!)
// Syntax: app.get('rasta', function)

// Agar koi Home Page ('/') par aaye:
app.get('/', (req, res) => {
    res.send("Ye Home Page hai! Express se banaya hua.");
});

// Agar koi About Page ('/about') par aaye:
app.get('/about', (req, res) => {
    res.send("Ye About Page hai. Code kitna clean ho gaya na?");
});

// Block 4: Dukaan ka Darwaza Kholna (Listen)
app.listen(3000, () => {
    console.log("Express Server port 3000 par chal raha hai! http://localhost:3000");
});