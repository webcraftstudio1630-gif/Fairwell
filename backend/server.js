import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import friendsRouter from './routes/friends.js';
import messagesRouter from './routes/messages.js';
import authRouter from './routes/auth.js';
import notesRouter from './routes/notes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to PostgreSQL and sync models
sequelize.sync({ alter: true }) // use alter: true to update schema if models change
  .then(() => console.log('PostgreSQL connected and models synced successfully'))
  .catch((err) => console.error('PostgreSQL connection error:', err));

// Routes
app.use('/api/friends', friendsRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);

app.get('/api/status', (req, res) => {
  res.json({ status: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
