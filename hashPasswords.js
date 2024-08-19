const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/user'); // Adjust the path as needed

// Environment configuration
require('dotenv').config();

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/contactDB';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Function to hash existing passwords
const hashPasswords = async () => {
  try {
    const users = await User.find();

    for (let user of users) {
      if (!user.password.startsWith('$2a$')) { // bcrypt hashed passwords start with $2a$
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        await user.save();
        console.log(`Password for user "${user.username}" hashed and updated`);
      } else {
        console.log(`Password for user "${user.username}" is already hashed`);
      }
    }
  } catch (err) {
    console.error('Error hashing passwords:', err);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
};

// Hash passwords
hashPasswords();
