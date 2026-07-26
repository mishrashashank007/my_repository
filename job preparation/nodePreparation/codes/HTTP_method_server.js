const http = require('http');

// 1. Register likhne ke liye File System module ko bulaya
const fs = require('fs');

const server = http.createServer((req, res) => {
    
    // Naya record jo register mein likhna hai
    const logData = `Naya customer yahan aaya: ${req.url} \n`;

    // 2. Register.txt file mein data add karna (purana delete kiye bina)
    fs.appendFile('register.txt', logData, (err) => {
        if (err) {
            console.log("Register mein likhne mein problem aayi!");
        } else {
            // Jab likhna successful ho jaye, tabhi customer ko reply dena hai
            res.end("Welcome! Aapka visit humare register mein note kar liya gaya hai.");
        }   
    });

});

server.listen(8000, () => {
    console.log("Register wali dukaan shuru: http://localhost:8000");
});


