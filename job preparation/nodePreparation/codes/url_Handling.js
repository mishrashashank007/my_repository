const express = require('express');
const app = express();

// https://www.google.com/search?q=javascript&userId=5

app.get('/',(req,res) =>{
    res.send("this is the home page");
});

app.get('/search',(req,res)=>{
    const searchQuery = req.query.q;
    const id = req.query.userID;    
    if (!searchQuery) {
        res.send("Bhai kuch search toh kar!");
    } else {
        res.send(`Aapne search kiya hai: ${searchQuery} aur aapki User ID hai: ${id}`);
    }
});

app.listen(8000, () => {
    console.log("Express Server chal pada port 8000 par! http://localhost:8000");
});