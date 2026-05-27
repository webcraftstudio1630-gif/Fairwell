import express from 'express';
import Friend from '../models/Friend.js';

const router = express.Router();

// GET all friends
router.get('/', async (req, res) => {
  try {
    const friends = await Friend.findAll();
    res.json(friends);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new friend
router.post('/', async (req, res) => {
  try {
    const newFriend = await Friend.create(req.body);
    res.status(201).json(newFriend);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST seed multiple friends
router.post('/seed', async (req, res) => {
  try {
    const friends = req.body;
    if (!Array.isArray(friends)) {
      return res.status(400).json({ message: 'Request body must be an array of friends.' });
    }
    
    // Clear existing
    await Friend.destroy({ where: {} });
    
    // Insert new
    const insertedFriends = await Friend.bulkCreate(friends);
    res.status(201).json({ message: 'Database seeded successfully', count: insertedFriends.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
