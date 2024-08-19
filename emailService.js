const nodemailer = require('nodemailer');
require('dotenv').config(); // Ensure you have dotenv installed and configured

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user:'cknartey004@gmail.com', // Your Gmail address from environment variables
    password: 'Lilc2004'  // Your Gmail password or app-specific password from environment variables
  }
});

const sendMail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Use the email address from environment variables
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = sendMail;
