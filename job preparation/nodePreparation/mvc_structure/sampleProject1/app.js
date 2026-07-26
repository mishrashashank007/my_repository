const express = require('express');

// Routes wali file se function import kiya
const routingIndexes = require('./Routes/index'); 
const app = express();

// 1. Apne Express app ko routing function mein pass kar diya taaki saare routes attach ho jayein
routingIndexes(app);

// 2. Server start kiya
const port = 4000;

app.listen(port, () => {
  console.log(`Register wali dukaan shuru: http://localhost:${port}/api/movies`);
});