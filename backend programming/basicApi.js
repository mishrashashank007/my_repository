// server.js

const express = require("express");
const app = express();
const PORT = 4000;

// Middleware to parse JSON body
app.use(express.json());

// POST route: Square of a number (from JSON body)
app.post("/square", (req, res) => {
  const { num } = req.body;
  const result = num * num;
  res.json({ result });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
