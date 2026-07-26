const express = require("express");

const app = express();

app.use(express.json());

const userRoute = require("./routes/userRoute");

app.use("/users", userRoute);

app.listen(3000, () => {  
    console.log("Server running on port 3000");
});