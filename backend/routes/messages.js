import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// GET all approved messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find({ isApproved: true }).sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new message
router.post('/', async (req, res) => {
  const message = new Message(req.body);
  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
