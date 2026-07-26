const express = require("express");
const app = express();
const PORT = 4000;

// Serve assets folder
app.use("/files",express.static("folder name"))

// Check route
app.get("/", (res, req)=>{
    res.send("Static file server running!")
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})