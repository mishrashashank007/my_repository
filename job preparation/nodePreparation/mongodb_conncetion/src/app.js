require('dotenv').config();

const express = require('express');

const connectDB = require('./config/db');
const routes = require('./routes');

const {
  notFoundHandler,
  errorHandler } = require('./middleware/errorHandler');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'User and Order MVC API is running'
  });
});

app.use('/api', routes);

app.use(notFoundHandler);
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(
        `Server running at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(
      `Application startup failed: ${error.message}`
    );

    process.exit(1);
  }
};

startServer();

module.exports = app;