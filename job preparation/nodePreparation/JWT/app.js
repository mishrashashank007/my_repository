const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/", userRoutes);

// Default Route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is running successfully."
    });
});

// Invalid Route Handler
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found."
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
