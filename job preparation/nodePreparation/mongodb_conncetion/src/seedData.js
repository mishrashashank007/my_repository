const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//require('./config/env');

const connectDB = require('./config/db');
const User = require('./models/User');
const Order = require('./models/Order');

const seedData = async () => {
  try {
    await connectDB();

    console.log('Removing old dummy data...');

    await Order.deleteMany({});
    await User.deleteMany({});

    const adminPassword = await bcrypt.hash(
      'admin123',
      10
    );

    const userPassword = await bcrypt.hash(
      'user123',
      10
    );

    const users = await User.insertMany([
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: adminPassword,
        role: 'admin',
        active: true
      },
      {
        name: 'Rahul Sharma',
        email: 'rahul@example.com',
        password: userPassword,
        role: 'user',
        active: true
      },
      {
        name: 'Priya Verma',
        email: 'priya@example.com',
        password: userPassword,
        role: 'user',
        active: true
      },
      {
        name: 'Amit Kumar',
        email: 'amit@example.com',
        password: userPassword,
        role: 'user',
        active: true
      }
    ]);

    const admin = users[0];
    const rahul = users[1];
    const priya = users[2];
    const amit = users[3];

    await Order.insertMany([
      {
        userId: rahul._id,
        productName: 'Laptop',
        quantity: 1,
        amount: 55000,
        status: 'confirmed'
      },
      {
        userId: rahul._id,
        productName: 'Wireless Mouse',
        quantity: 2,
        amount: 1600,
        status: 'pending'
      },
      {
        userId: priya._id,
        productName: 'Mobile Phone',
        quantity: 1,
        amount: 25000,
        status: 'shipped'
      },
      {
        userId: priya._id,
        productName: 'Bluetooth Headphones',
        quantity: 1,
        amount: 3200,
        status: 'delivered'
      },
      {
        userId: amit._id,
        productName: 'Keyboard',
        quantity: 1,
        amount: 2200,
        status: 'confirmed'
      },
      {
        userId: amit._id,
        productName: 'Monitor',
        quantity: 2,
        amount: 28000,
        status: 'pending'
      },
      {
        userId: admin._id,
        productName: 'Office Chair',
        quantity: 1,
        amount: 8500,
        status: 'delivered'
      }
    ]);

    console.log('Dummy data inserted successfully');

    console.log('\nLogin credentials:');

    console.log({
      admin: {
        email: 'admin@example.com',
        password: 'admin123'
      },
      users: {
        email: 'rahul@example.com',
        password: 'user123'
      }
    });
  } catch (error) {
    console.error(
      `Dummy data seed failed: ${error.message}`
    );

    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();

    console.log('MongoDB connection closed');
  }
};

seedData();