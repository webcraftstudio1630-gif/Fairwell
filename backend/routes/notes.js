import express from 'express';
import { Op } from 'sequelize';
import PersonalNote from '../models/PersonalNote.js';
import User from '../models/User.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all personal notes
router.get('/', auth, async (req, res) => {
  try {
    let whereClause = {};
    if (req.user.role !== 'Admin') {
      whereClause = {
        [Op.or]: [{ userId: req.user.id }, { recipientId: req.user.id }]
      };
    }

    const notes = await PersonalNote.findAll({
      where: whereClause,
      include: [
        { model: User, as: 'Sender', attributes: ['id', 'username', 'uniqueId', 'role'] },
        { model: User, as: 'Recipient', attributes: ['id', 'username', 'uniqueId', 'role'] },
        { model: User, as: 'Likes', attributes: ['id'] }
      ],
      order: [['createdAt', 'DESC']]
    });

    // Format the likes so frontend just gets array of ids like before
    const formattedNotes = notes.map(note => {
      const noteJson = note.toJSON();
      noteJson.user = noteJson.Sender;
      noteJson.recipient = noteJson.Recipient;
      noteJson.likes = noteJson.Likes ? noteJson.Likes.map(l => l.id) : [];
      return noteJson;
    });

    res.json(formattedNotes);
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

    const newNote = await PersonalNote.create({
      userId: req.user.id,
      recipientId: recipientId,
      content
    });

    const populatedNote = await PersonalNote.findByPk(newNote.id, {
      include: [
        { model: User, as: 'Sender', attributes: ['id', 'username', 'uniqueId', 'role'] },
        { model: User, as: 'Recipient', attributes: ['id', 'username', 'uniqueId', 'role'] },
        { model: User, as: 'Likes', attributes: ['id'] }
      ]
    });
    
    const noteJson = populatedNote.toJSON();
    noteJson.user = noteJson.Sender;
    noteJson.recipient = noteJson.Recipient;
    noteJson.likes = [];

    res.status(201).json(noteJson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Toggle like on a personal note
router.put('/:id/like', auth, async (req, res) => {
  try {
    const note = await PersonalNote.findByPk(req.params.id);
    
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Check if the user has already liked the note
    const hasLiked = await note.hasLike(req.user.id);
    if (!hasLiked) {
      await note.addLike(req.user.id);
    } else {
      await note.removeLike(req.user.id);
    }

    const populatedNote = await PersonalNote.findByPk(note.id, {
      include: [
        { model: User, as: 'Sender', attributes: ['id', 'username', 'uniqueId', 'role'] },
        { model: User, as: 'Recipient', attributes: ['id', 'username', 'uniqueId', 'role'] },
        { model: User, as: 'Likes', attributes: ['id'] }
      ]
    });
    
    const noteJson = populatedNote.toJSON();
    noteJson.user = noteJson.Sender;
    noteJson.recipient = noteJson.Recipient;
    noteJson.likes = noteJson.Likes ? noteJson.Likes.map(l => l.id) : [];
    
    res.json(noteJson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
