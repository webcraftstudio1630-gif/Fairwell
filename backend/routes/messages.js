import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// GET all approved messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.findAll({ 
      where: { isApproved: true },
      order: [['createdAt', 'DESC']]
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new message
router.post('/', async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
