const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const LoginAttempt = require('../models/LoginAttempt'); // Import the LoginAttempt model

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Log the login attempt
  const loginAttempt = new LoginAttempt({ username, success: false });

  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      await loginAttempt.save(); // Save the failed login attempt
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    loginAttempt.success = true;
    await loginAttempt.save(); // Save the successful login attempt

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    await loginAttempt.save(); // Save the failed login attempt in case of error
    res.status(500).json({ message: 'Server error' });
  }
});

// Middleware to protect routes
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = { router, authenticate };
