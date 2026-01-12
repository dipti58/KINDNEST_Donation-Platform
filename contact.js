const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage'); // Mongoose model

router.post('/contact-admin', async (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  try {
    const newMessage = new ContactMessage({ email, message, date: new Date() });
    await newMessage.save();
    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Failed to save contact message:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;