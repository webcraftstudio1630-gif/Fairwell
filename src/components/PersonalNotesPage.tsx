import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, PenTool, Send, Heart } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

interface NoteUser {
  id?: string;
  username: string;
  uniqueId: string;
  role: string;
}

interface Note {
  id: string;
  user: NoteUser;
  recipient: NoteUser;
  content: string;
  createdAt: string;
  likes: string[];
}

export const PersonalNotesPage: React.FC = () => {
  const { token, user } = useContext(AuthContext);
  const [notes, setNotes] = useState<Note[]>([]);
  const [users, setUsers] = useState<NoteUser[]>([]);
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const apiUrl = '/api/notes';

  const fetchNotes = async () => {
    try {
      const res = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setNotes(data);
      }
    } catch (err) {
      console.error('Failed to fetch notes', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/auth/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
        const adminUser = data.find((u: NoteUser) => u.role === 'Admin');
        if (adminUser) setSelectedRecipient(adminUser.id);
        else if (data.length > 0) setSelectedRecipient(data[0].id);
      }
    } catch (err) {
      console.error('Failed to fetch users', err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchNotes();
      fetchUsers();
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content: newNote, recipientId: selectedRecipient })
      });

      if (res.ok) {
        const savedNote = await res.json();
        setNotes([savedNote, ...notes]);
        setNewNote('');
      }
    } catch (err) {
      console.error('Failed to post note', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleLike = async (noteId: string) => {
    try {
      const res = await fetch(`${apiUrl}/${noteId}/like`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        const updatedNote = await res.json();
        setNotes(notes.map(n => n.id === noteId ? updatedNote : n));
      }
    } catch (err) {
      console.error('Failed to like note', err);
    }
  };

  return (
    <div className="relative z-10 pt-20 md:pt-32 pb-16 px-4 max-w-7xl mx-auto space-y-12 font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-200 mb-2 shadow-sm"
        >
          <PenTool className="w-3.5 h-3.5" />
          <span>Write a Note</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-r from-slate-900 via-purple-950 to-slate-800 bg-clip-text text-transparent"
        >
          Personal Notes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-600 text-base font-light leading-relaxed max-w-2xl mx-auto"
        >
          Write a personal farewell note to a specific friend or the Admin. These notes are safely vaulted and strictly private — they can only be read by you, the recipient, and the Admin.
        </motion.p>
      </div>

      {/* Write a Note Form */}
      <div className="max-w-3xl mx-auto glass-panel p-6 rounded-3xl shadow-xl border-slate-200 bg-white/90 backdrop-blur-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/5 rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition duration-700" />
        
        <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 bg-slate-50/50 p-4 rounded-xl border border-slate-200 shadow-sm">
            <span className="text-sm font-bold text-slate-700 whitespace-nowrap uppercase tracking-wider">Send Note To:</span>
            <select
              value={selectedRecipient}
              onChange={(e) => setSelectedRecipient(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 font-medium focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
              required
            >
              <option value="" disabled>Select a recipient...</option>
              {users.filter(u => u.id !== user?.id).map(u => (
                <option key={u.id} value={u.id}>
                  {u.username} {u.role === 'Admin' ? '(Admin)' : ''}
                </option>
              ))}
            </select>
          </div>
          
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Write your private note here..."
            className="w-full h-32 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition shadow-inner resize-none"
            required
          />
          
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              disabled={submitting || !newNote.trim() || !selectedRecipient}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm font-semibold shadow-[0_4px_15px_rgba(168,85,247,0.3)] transition duration-300 flex items-center gap-2 group/btn disabled:opacity-50"
            >
              <span>{submitting ? 'Sending...' : 'Send Note'}</span>
              <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition" />
            </button>
          </div>
        </form>
      </div>

      {/* Notes Feed */}
      <div className="max-w-4xl mx-auto space-y-6 pt-8">
        <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2 mb-6">
          <MessageCircle className="w-5 h-5 text-purple-600" /> Recent Notes
        </h3>

        {loading ? (
          <div className="flex justify-center py-12">
            <Sparkles className="w-8 h-8 text-purple-400 animate-spin" />
          </div>
        ) : notes.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-3xl p-8 border-slate-200 shadow-sm bg-white/50">
            <p className="text-slate-600 font-serif italic text-lg">The vault is currently empty. Be the first to leave a memory!</p>
          </div>
        ) : (
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {notes.map((note) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-panel p-6 rounded-3xl border-slate-200 shadow-lg bg-white/80 relative group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 border border-purple-200 flex items-center justify-center text-purple-800 font-bold shadow-sm shrink-0">
                        {note.user?.username.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold text-slate-900 flex flex-wrap items-center gap-1.5">
                          <span>{note.user?.username}</span>
                          {note.user?.role === 'Admin' && <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded border border-amber-200">ADMIN</span>}
                          <span className="text-slate-400 font-light mx-1">→</span>
                          <span>{note.recipient?.username}</span>
                          {note.recipient?.role === 'Admin' && <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded border border-amber-200">ADMIN</span>}
                        </p>
                        <p className="text-[10px] text-slate-500 font-mono">{new Date(note.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 shadow-inner">
                    <p className="text-sm text-slate-700 font-light leading-relaxed whitespace-pre-wrap">
                      {note.content}
                    </p>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400">ID: {note.user?.uniqueId}</span>
                    <button onClick={() => handleLike(note.id)} className="flex items-center gap-1.5 group/like">
                      <Heart className={`w-4 h-4 transition ${note.likes?.includes(user?.id || '') ? 'text-pink-600 fill-pink-600' : 'text-pink-200 group-hover/like:text-pink-600'}`} />
                      {note.likes?.length > 0 && <span className="text-xs text-slate-500 font-medium">{note.likes.length}</span>}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
