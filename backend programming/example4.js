const express = require("express");
const app = express();
const PORT = 4000;

// Middleware to parse JSON data
app.use(express.json());

// Custom Logger Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Simple POST route
app.post("/add-user", (req, res) => {
  const { name, age } = req.body;
  res.json({
    message: `User ${name}, age ${age} added successfully.`,
  });
});

// Square of a number
app.post("/square", (req, res) => {
  const { num } = req.body;
  const result = num * num;

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
