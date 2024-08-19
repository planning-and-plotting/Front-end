const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.post('/contact', (req, res) => {
  const newContact = new Contact(req.body);
  newContact.save((err) => {
    if (err) {
      return res.status(500).send(err);
    }
    app.get('/contact', (req, res) => {
      res.send('Contact Us Page');
    });
     app.get('/test', (req, res) => {
      res.send('Test route is working!');
    });
    
  });
});

module.exports = router;
