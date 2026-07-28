const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userDao = require('../dao/userDao');

const createHttpError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;

  return error;
};

const generateToken = (user) => {
  if (!process.env.JWT_SECRET) {
    throw new Error(
      'JWT_SECRET is missing in environment variables'
    );
  }

  const payload = {
    userId: user._id.toString(),
    email: user.email,
    role: user.role
  };

  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h',
      issuer: 'user-order-api',
      audience: 'user-order-api-client'
    }
  );
};

const login = async (email, password) => {
  if (!email || !password) {
    throw createHttpError(
      'Email and password are required',
      400
    );
  }

  const user = await userDao.findByEmail(
    email,
    true
  );

  if (!user) {
    throw createHttpError(
      'Invalid email or password',
      401
    );
  }

  if (!user.active) {
    throw createHttpError(
      'User account is inactive',
      403
    );
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordValid) {
    throw createHttpError(
      'Invalid email or password',
      401
    );
  }

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  };
};

module.exports = {
  login
};