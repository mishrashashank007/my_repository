const express = require("express");
const app = express();
const PORT = 4000;

// Route 1: Current time
app.get("/time", (req, res) => {
  res.send(new Date().toISOString());
});

// Route 2: Greeting
app.get("/greet", (req, res) => {
  res.send("Hello, welcome to our server!");
});

// Route 3: Sum of two numbers
app.get("/sum", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const result = a + b;

  res.json({ result });
});

// Route 4: Square of a number
app.get("/square", (req, res) => {
  const num = Number(req.query.num);
  const result = num * num;

  res.json({ result });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
