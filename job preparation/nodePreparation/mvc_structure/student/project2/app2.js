const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const routes = require("./routes/userRoute");
app.use("/user", routes);

app.listen(port, ()=>{
    console.log(`server is running on port http://localhost:${port}/user`);
});