const mongoose = require('mongoose');
const User = require('./models/user'); // Adjust the path as needed
const bcrypt = require('bcryptjs');

// Environment configuration
require('dotenv').config();

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/contactDB';

// Connect to MongoDB
mongoose.connect(mongoURI).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Function to create a user
const createUser = async (username, password) => {
  // Check if the user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    console.log(`User with username "${username}" already exists`);
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    password: hashedPassword,
  });

  await newUser.save();
  console.log(`User "${username}" created`);
};

// Function to initialize users
const initializeUsers = async () => {
  try {
    await createUser('user', 'password123');
    await createUser('admin', 'admin123');
  } catch (err) {
    console.error('Error creating users:', err);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
};

// Initialize users
initializeUsers();
