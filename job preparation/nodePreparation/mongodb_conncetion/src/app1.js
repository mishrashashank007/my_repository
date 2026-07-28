require('dotenv').config();
const express = require('express');
// const userRoutes = require('./routes/userRoutes');
// const orderRoutes = require('./routes/orderRoutes');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

console.log('JWT_SECRET available:', Boolean(process.env.JWT_SECRET));
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'User and Order MVC API is running'
  });
});

// app.use('/api/users', userRoutes);
// app.use('/api/orders', orderRoutes);




// const registerRoutes = require("./routes");
//registerRoutes(app);

// require("./routes")(app);

const routes = require("./routes");

app.use("/api", routes);


app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
