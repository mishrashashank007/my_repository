const mongoose = require('mongoose');

const connectDB = async () => {
// console.log( process.env.JWT_SECRET);
// console.log( process.env.MONGO_URI);
    
  const mongoUri = process.env.MONGO_URI;

//   if (!mongoUri) {
//     throw new Error(
//       'MONGO_URI is missing. Please add it to the .env file.'
//     );
//   }

  try {
    const connection = await mongoose.connect(mongoUri);

    // console.log(
    //   `MongoDB connected: ${connection.connection.host}`
    // );
  } catch (error) {
    console.error(
      `MongoDB connection failed: ${error.message}`
    );

    throw error;
  }
};

module.exports = connectDB;