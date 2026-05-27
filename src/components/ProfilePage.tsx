import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, User as UserIcon, Heart, Star, Sparkles, BookOpen, Ban, CheckCircle, LogIn } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { friendsData } from '../data/friendsData';

export const ProfilePage: React.FC = () => {
  const { user, token, login } = useContext(AuthContext);
  const [usersList, setUsersList] = useState<any[]>([]);

  useEffect(() => {
    if (user?.role === 'Admin') {
      fetch('/api/auth/users', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(r => r.json())
      .then(data => setUsersList(data))
      .catch(err => console.error('Failed to load users', err));
    }
  }, [user, token]);

  const handleBanToggle = async (userId: string) => {
    try {
      const res = await fetch(`/api/auth/users/${userId}/ban`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const updatedUser = await res.json();
        setUsersList(usersList.map(u => u._id === userId ? updatedUser : u));
      }
    } catch (err) {
      console.error('Failed to toggle ban status', err);
    }
  };

  const handleImpersonate = async (userId: string) => {
    try {
      const res = await fetch(`/api/auth/impersonate/${userId}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        login(data.user, data.token);
      }
    } catch (err) {
      console.error('Failed to impersonate user', err);
    }
  };

  if (!user) {
    return null;
  }

  const isAdmin = user.role === 'Admin';
  const friendData = !isAdmin ? friendsData.find(f => f.username === user.username) : null;

  return (
    <div className="relative z-10 pt-32 pb-16 px-4 max-w-5xl mx-auto min-h-[80vh] font-sans">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      {isAdmin ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 md:p-12 rounded-3xl shadow-xl border-slate-200 bg-white/80 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[50px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-600 p-1 shadow-lg shrink-0">
              <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center">
                <Shield className="w-12 h-12 text-amber-500" />
              </div>
            </div>
            
            <div className="text-center md:text-left space-y-4 flex-1">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider border border-amber-200 mb-3">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> System Administrator
                </div>
                <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">Welcome, Admin</h1>
                <p className="text-slate-500 font-mono text-sm">Vault ID: {user.uniqueId}</p>
              </div>
              
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-inner mt-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" /> Admin Dashboard
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  You are viewing the administrator console. As the admin, you have access to the Personal Notes vault, where you can view all securely encrypted messages exchanged between friends, or notes sent directly to you. Your presence ensures the safety and privacy of the group's memories.
                </p>
                
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-md font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-slate-500" /> Manage Users
                  </h4>
                  <div className="space-y-3">
                    {usersList.filter(u => u.role !== 'Admin').map(u => (
                      <div key={u._id} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <div>
                          <p className={`text-sm font-bold ${u.isBanned ? 'text-red-600 line-through' : 'text-slate-800'}`}>{u.username}</p>
                          <p className="text-xs font-mono text-slate-400">ID: {u.uniqueId}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleImpersonate(u._id)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
                            title="Login as this user"
                          >
                            <LogIn className="w-3.5 h-3.5" />
                            Login
                          </button>
                          <button
                            onClick={() => handleBanToggle(u._id)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${u.isBanned ? 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100' : 'bg-red-50 text-red-700 border border-red-200 hover:bg-red-100'}`}
                          >
                            {u.isBanned ? <CheckCircle className="w-3.5 h-3.5" /> : <Ban className="w-3.5 h-3.5" />}
                            {u.isBanned ? 'Unban' : 'Ban User'}
                          </button>
                        </div>
                      </div>
                    ))}
                    {usersList.length === 0 && <p className="text-xs text-slate-400 italic">Loading users...</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-6 md:p-10 rounded-3xl shadow-xl border-slate-200 bg-white/80 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl p-1 bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 shadow-lg shrink-0">
              {friendData ? (
                <img src={friendData.photo} alt={friendData.name} className="w-full h-full object-cover rounded-[22px]" />
              ) : (
                <div className="w-full h-full bg-slate-100 rounded-[22px] flex items-center justify-center">
                  <UserIcon className="w-16 h-16 text-slate-400" />
                </div>
              )}
            </div>
            
            <div className="text-center md:text-left space-y-4 flex-1">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-200 mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> Friend Profile
                </div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-2">
                  {friendData ? friendData.name : user.username}
                </h1>
                {friendData?.nickname && (
                  <p className="text-purple-600 font-medium italic text-lg mb-1">"{friendData.nickname}"</p>
                )}
                <p className="text-slate-500 font-mono text-xs">User ID: {user.uniqueId}</p>
              </div>
              
              {friendData && (
                <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/60 border border-slate-100 rounded-2xl shadow-sm">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Role in Group</h4>
                    <p className="text-slate-800 font-medium">{friendData.role}</p>
                  </div>
                  <div className="p-4 bg-white/60 border border-slate-100 rounded-2xl shadow-sm">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Signature Quote</h4>
                    <p className="text-slate-700 text-sm italic">"{friendData.quote}"</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {friendData?.letter && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl shadow-inner relative"
            >
              <Heart className="absolute top-6 right-6 w-5 h-5 text-pink-200" />
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-600" /> Your Personal Letter
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base font-light whitespace-pre-wrap">
                {friendData.letter}
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};
