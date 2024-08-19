const express = require('express');
const router = express.Router();
const { authenticate } = require('./auth');
const Contact = require('../models/contact');

router.get('/contacts', authenticate, async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Error fetching contacts' });
  }
});

module.exports = router;
