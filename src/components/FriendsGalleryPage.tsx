import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Quote, Search, Filter } from 'lucide-react';
import { friendsData, Friend } from '../data/friendsData';

interface FriendsGalleryProps {
  setActiveTab: (tab: string) => void;
  setSelectedFriendId: (id: string) => void;
}

export const FriendsGalleryPage: React.FC<FriendsGalleryProps> = ({ setActiveTab, setSelectedFriendId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');

  const roles = ['All', ...Array.from(new Set(friendsData.map(f => f.role)))];

  const filteredFriends = friendsData.filter((friend) => {
    const matchesSearch = friend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      friend.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      friend.quote.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'All' || friend.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleOpenLetter = (id: string) => {
    setSelectedFriendId(id);
    setActiveTab('letters');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
          <span>The 13 Pillars of Our Constellation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-r from-slate-900 via-purple-950 to-slate-800 bg-clip-text text-transparent"
        >
          Meet the Family
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-600 text-base font-light leading-relaxed max-w-2xl mx-auto"
        >
          Each friend brings a unique harmony to our shared melody. Explore their profiles, read their favorite memory quotes, and open their dedicated farewell letters.
        </motion.p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto glass-panel p-4 rounded-2xl shadow-md border-slate-200 bg-white/90 backdrop-blur-xl">
        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or nickname..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition shadow-inner"
          />
        </div>

        {/* Roles Filter */}
        <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-purple-600 mr-2 shrink-0 hidden sm:block" />
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setFilterRole(role)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition shrink-0 ${filterRole === role ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md font-semibold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Friends Grid / Masonry-style */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4"
      >
        <AnimatePresence>
          {filteredFriends.map((friend: Friend, index) => (
            <motion.div
              layout
              key={friend.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group border-slate-200 shadow-xl bg-white/80"
            >
              {/* Background Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-full blur-[60px] pointer-events-none group-hover:scale-150 transition duration-700" />

              <div className="space-y-6 relative z-10">
                {/* Photo & Header */}
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-purple-200 shadow-md group-hover:border-pink-300 transition duration-300">
                    <img
                      src={friend.photo}
                      alt={friend.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="space-y-1 overflow-hidden">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200 inline-block shadow-sm">
                      {friend.role}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-purple-950 transition truncate">
                      {friend.name}
                    </h3>
                    <p className="text-xs text-pink-600 font-medium truncate">
                      "{friend.nickname}"
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 relative shadow-inner group-hover:bg-purple-50/30 transition">
                  <Quote className="absolute top-2 left-2 w-4 h-4 text-purple-300 pointer-events-none" />
                  <p className="text-xs text-slate-600 font-light leading-relaxed italic pl-3 relative z-10">
                    "{friend.quote}"
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100 relative z-10 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-mono font-medium">ID: #{friend.id}</span>
                <button
                  onClick={() => handleOpenLetter(friend.id)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-semibold shadow-[0_4px_15px_rgba(168,85,247,0.3)] hover:shadow-[0_6px_20px_rgba(236,72,153,0.4)] transition duration-300 flex items-center gap-2 group/btn"
                >
                  <span>Open Letter</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredFriends.length === 0 && (
        <div className="text-center py-20 glass-panel rounded-3xl p-8 max-w-lg mx-auto border-slate-200 shadow-xl bg-white">
          <p className="text-lg text-slate-800 font-serif mb-2 font-bold">No friends found matching your search.</p>
          <p className="text-xs text-slate-500 mb-6 font-light">Try adjusting your search terms or selecting a different filter.</p>
          <button
            onClick={() => { setSearchTerm(''); setFilterRole('All'); }}
            className="px-6 py-2 bg-purple-600 text-white rounded-xl text-xs font-semibold shadow-md hover:bg-purple-700 transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
