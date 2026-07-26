const express = require("express");
const app = express();
const PORT = 3000;

app.get("/time", (req, res) => {
  res.send(new Date().toString());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});