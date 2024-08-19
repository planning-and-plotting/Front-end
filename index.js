const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const sendMail = require('./emailService');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connection established');
});

// Define Schema and Models
const contactSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// GET route for /contact
app.get('/contact', async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).send('Error fetching contacts');
  }
});

// POST route for /contact
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email notification
    sendMail(
      process.env.EMAIL_USER, 
      'New Contact Message', 
      `You have received a new message from ${name} (${email}): ${message}`
    );

    res.status(200).send(`Contact data received: ${JSON.stringify(req.body)}`);
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).send('Error saving contact data');
  }
});

// POST route for /api/login
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log('Login attempt:', { username, password }); // Log the login attempt

    const user = await User.findOne({ username });
    console.log('User found in DB:', user); // Log the user found in the database

    if (!user) {
      console.log('User not found'); // Log if the user is not found
      return res.status(401).send('Invalid username or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match result:', isMatch); // Log the result of the password comparison

    if (!isMatch) {
      console.log('Password does not match'); // Log if the password comparison fails
      return res.status(401).send('Invalid username or password');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Token generated:', token); // Log the generated token

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Error logging in');
  }
});

// POST route for /api/register
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log('Register attempt:', { username, password }); // Log the registration attempt

    const existingUser = await User.findOne({ username });
    console.log('Check if user exists:', existingUser); // Log whether the user already exists

    if (existingUser) {
      console.log('User already exists'); // Log if the user already exists
      return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword); // Log the hashed password

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    console.log('New user created:', newUser); // Log the new user creation

    res.status(201).send('User created');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
