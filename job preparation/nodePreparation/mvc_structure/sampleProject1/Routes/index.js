// 1. Apne teeno routes ko import kiya
const movieRoutes = require('./movieRoutes');
const directorRoutes = require('./directorRoutes');
const userRoutes = require('./userRoutes');

const routingIndexes = (app) => {
  // 2. Traffic Police (app.use) ko rules bata diye
  // Agar URL '/api/movies' se shuru ho, toh movieRoutes ke paas bhejo
  app.use('/api/movies', movieRoutes);

  // Agar URL '/api/directors' se shuru ho, toh directorRoutes ke paas bhejo
  app.use('/api/directors', directorRoutes);

  // Agar URL '/api/users' se shuru ho, toh userRoutes ke paas bhejo
  app.use('/api/users', userRoutes);
};

module.exports = routingIndexes;