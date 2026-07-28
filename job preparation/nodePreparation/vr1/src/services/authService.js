const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../data/users');

const login = async (email, password) => {
  if (!email || !password) {
    const error = new Error('Email and password are required');
    error.statusCode = 400;
    throw error;
  }

  const user = users.find((item) => item.email.toLowerCase() === email.toLowerCase());

  if (!user) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const isPasswordValid = await  bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const payload = {
    userId: user.id,
    email: user.email,
    role: user.role
  };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h',
      issuer: 'user-order-api',
      audience: 'user-order-api-client'
    }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  };
};


// const generateToken = (user) => {
//   const secretKey = process.env.JWT_SECRET;

//   if (!secretKey) {
//     throw new Error('JWT_SECRET is missing in environment variables');
//   }

//   return jwt.sign(
//     {
//       userId: user.id,
//       email: user.email,
//       role: user.role
//     },
//     secretKey,
//     {
//       expiresIn: process.env.JWT_EXPIRES_IN || '1h'
//     }
//   );
// };



module.exports = {
  login,
  //generateToken
};