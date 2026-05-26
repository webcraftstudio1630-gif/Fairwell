import express from 'express';
import PersonalNote from '../models/PersonalNote.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all personal notes
router.get('/', auth, async (req, res) => {
  try {
    let notes;
    if (req.user.role === 'Admin') {
      // Admin sees all notes
      notes = await PersonalNote.find()
        .populate('user', 'username uniqueId role')
        .populate('recipient', 'username uniqueId role')
        .sort({ createdAt: -1 });
    } else {
      // Friends see notes they sent OR received
      notes = await PersonalNote.find({
        $or: [{ user: req.user.id }, { recipient: req.user.id }]
      })
        .populate('user', 'username uniqueId role')
        .populate('recipient', 'username uniqueId role')
        .sort({ createdAt: -1 });
    }
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a personal note
router.post('/', auth, async (req, res) => {
  try {
    const { content, recipientId } = req.body;
    
    if (!content) {
      return res.status(400).json({ message: 'Note content cannot be empty.' });
    }
    
    if (!recipientId) {
      return res.status(400).json({ message: 'Recipient is required.' });
    }

    const newNote = new PersonalNote({
      user: req.user.id,
      recipient: recipientId,
      content
    });

    const savedNote = await newNote.save();
    const populatedNote = await savedNote.populate(['user', 'recipient']);
    
    res.status(201).json(populatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Toggle like on a personal note
router.put('/:id/like', auth, async (req, res) => {
  try {
    const note = await PersonalNote.findById(req.params.id);
    
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Check if the user has already liked the note
    const index = note.likes.indexOf(req.user.id);
    if (index === -1) {
      // Not liked yet, add user to likes
      note.likes.push(req.user.id);
    } else {
      // Already liked, remove user from likes
      note.likes.splice(index, 1);
    }

    const savedNote = await note.save();
    const populatedNote = await savedNote.populate(['user', 'recipient']);
    
    res.json(populatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
