const express = require("express")
const app = express();
const userRouter = require('../Routers/userRouter');
const userRoutes = app.use('/user',userRoutes.js);
userRouters(app)

// Home URL
app.get('/', (req, res)=>{
    res.send("hello world");
})

app.listen(3000, () => console.log("server is running"))

