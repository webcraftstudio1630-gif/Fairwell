import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Registration is closed. Use seedAccounts.js to generate the preset accounts.
// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Not all fields have been entered.' });
    }

    // Perform case-insensitive search so "Adveth", "adveth", or "ADVETH" all work
    const user = await User.findOne({ username: { $regex: new RegExp(`^${username}$`, 'i') } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    if (user.isBanned) {
      return res.status(403).json({ message: 'This account has been banned.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ id: user._id, role: user.role, username: user.username, uniqueId: user.uniqueId }, process.env.JWT_SECRET || 'fallback_secret');
    
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        uniqueId: user.uniqueId
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get current user
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users (for recipient selection)
router.get('/users', auth, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Toggle Ban Status (Admin only)
router.put('/users/:id/ban', auth, async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Only admins can ban users.' });
    }

    const userToBan = await User.findById(req.params.id);
    if (!userToBan) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (userToBan.role === 'Admin') {
      return res.status(400).json({ message: 'Cannot ban an admin' });
    }

    userToBan.isBanned = !userToBan.isBanned;
    await userToBan.save();
    res.json(userToBan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Impersonate User (Admin only)
router.post('/impersonate/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Only admins can impersonate users.' });
    }

    const userToImpersonate = await User.findById(req.params.id);
    if (!userToImpersonate) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (userToImpersonate.isBanned) {
      return res.status(403).json({ message: 'This account has been banned.' });
    }

    const token = jwt.sign({ id: userToImpersonate._id, role: userToImpersonate.role, username: userToImpersonate.username, uniqueId: userToImpersonate.uniqueId }, process.env.JWT_SECRET || 'fallback_secret');
    
    res.json({
      token,
      user: {
        id: userToImpersonate._id,
        username: userToImpersonate.username,
        role: userToImpersonate.role,
        uniqueId: userToImpersonate.uniqueId
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
