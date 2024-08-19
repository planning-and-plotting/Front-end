// models/LoginAttempt.js
const mongoose = require('mongoose');

const loginAttemptSchema = new mongoose.Schema({
  username: String,
  success: Boolean,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('LoginAttempt', loginAttemptSchema);
