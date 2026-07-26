const express = express;
const app = express();

// Home URL

app.get('/', (req, res) =>{
    res.send("hi")
})
