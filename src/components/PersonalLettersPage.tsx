import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Calendar, Bookmark, Quote, PenTool, Sparkle, ArrowLeft, Lock } from 'lucide-react';
import { friendsData, Friend } from '../data/friendsData';
import { AuthContext } from '../context/AuthContext';

interface PersonalLettersProps {
  setActiveTab: (tab: string) => void;
  selectedFriendId: string | null;
  setSelectedFriendId: (id: string) => void;
}

export const PersonalLettersPage: React.FC<PersonalLettersProps> = ({ setActiveTab, selectedFriendId, setSelectedFriendId }) => {
  const { user } = useContext(AuthContext);

  const visibleFriends = friendsData.filter((friend) => {
    if (user?.role === 'Admin') return true;
    return friend.username === user?.username;
  });

  // Default to the first friend if none selected
  const [activeFriend, setActiveFriend] = useState<Friend | null>(() => {
    if (selectedFriendId) {
      const found = visibleFriends.find(f => f.id === selectedFriendId);
      if (found) return found;
    }
    return visibleFriends.length > 0 ? visibleFriends[0] : null;
  });

  useEffect(() => {
    if (selectedFriendId) {
      const found = visibleFriends.find(f => f.id === selectedFriendId);
      if (found) {
        setActiveFriend(found);
      }
    }
  }, [selectedFriendId, visibleFriends]);

  const handleSelectFriend = (friend: Friend) => {
    setActiveFriend(friend);
    setSelectedFriendId(friend.id);
  };

  if (!activeFriend) {
    return (
      <div className="relative z-10 pt-20 md:pt-32 pb-16 px-4 max-w-7xl mx-auto space-y-12 font-sans text-center h-screen flex flex-col items-center justify-center">
        <Lock className="w-16 h-16 text-slate-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-700">No Letters Available</h2>
        <p className="text-slate-500">You do not have access to any personal letters.</p>
        <button
          onClick={() => setActiveTab('gallery')}
          className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
        >
          Back to Gallery
        </button>
      </div>
    );
  }

  return (
    <div className="relative z-10 pt-20 md:pt-32 pb-16 px-4 max-w-7xl mx-auto space-y-12 font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-700 text-xs font-semibold border border-pink-200 mb-2 shadow-sm"
        >
          <PenTool className="w-3.5 h-3.5" />
          <span>Intimate & Uncensored Memories</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-r from-slate-900 via-purple-950 to-slate-800 bg-clip-text text-transparent"
        >
          Personal Farewell Letters
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-600 text-base font-light leading-relaxed max-w-2xl mx-auto"
        >
          Select a friend below to read their dedicated open letter, explore their friendship timeline, and revisit the milestones that defined our years together.
        </motion.p>
      </div>

      {/* Navigation Tabs / Carousel */}
      <div className="glass-panel p-3 rounded-3xl shadow-md border-slate-200 bg-white/90 backdrop-blur-xl max-w-full overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 min-w-max px-1 py-1">
          {visibleFriends.map((friend) => {
            const isActive = activeFriend.id === friend.id;
            return (
              <button
                key={friend.id}
                onClick={() => handleSelectFriend(friend)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl transition duration-300 relative group ${isActive ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-semibold shadow-[0_4px_15px_rgba(168,85,247,0.3)]' : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'}`}
              >
                <div className="w-8 h-8 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-sm">
                  <img src={friend.photo} alt={friend.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-left pr-2">
                  <p className="text-xs font-serif font-bold leading-tight truncate max-w-[120px]">{friend.name}</p>
                  <p className={`text-[10px] truncate max-w-[120px] ${isActive ? 'text-pink-100 font-medium' : 'text-slate-500'}`}>"{friend.nickname}"</p>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="active-friend-tab"
                    className="absolute inset-0 rounded-2xl border border-white/40 pointer-events-none shadow-sm"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Letter Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFriend.id}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Large Photo & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 border-slate-200 shadow-xl relative overflow-hidden group bg-white/80">
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px] pointer-events-none" />

              {/* Large Image */}
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mb-6 border border-slate-200">
                <img
                  src={activeFriend.photo}
                  alt={activeFriend.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 space-y-1 z-10">
                  <span className="text-xs uppercase tracking-widest font-bold text-purple-200 bg-purple-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-purple-400/40 shadow-sm inline-block mb-2">
                    {activeFriend.role}
                  </span>
                  <h2 className="text-3xl font-serif font-bold text-white drop-shadow-md">
                    {activeFriend.name}
                  </h2>
                  <p className="text-sm text-pink-200 font-medium drop-shadow">
                    "{activeFriend.nickname}"
                  </p>
                </div>
              </div>

              {/* Highlights Reel Tags */}
              <div className="space-y-3 bg-slate-50 rounded-2xl p-4 border border-slate-200 shadow-inner">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                  <Sparkle className="w-3.5 h-3.5" /> Best Moments & Legacy
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeFriend.highlights.map((h, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-xl bg-white text-slate-800 text-xs font-medium border border-slate-200 shadow-sm flex items-center gap-1.5">
                      <Heart className="w-3 h-3 text-pink-600 fill-current" /> {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Farewell Letter & Timeline */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Letter Card */}
            <div className="glass-panel rounded-3xl p-8 md:p-12 border-slate-200 shadow-xl relative overflow-hidden space-y-8 bg-white/80">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-200 mb-2 shadow-sm">
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Official Farewell Letter</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
                    Dear {activeFriend.name.split(' ')[0]},
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 self-start sm:self-center font-medium">
                  Memory Vault #2026
                </span>
              </div>

              {/* Letter Paragraphs */}
              <div className="prose max-w-none text-slate-700 font-light leading-relaxed space-y-6 text-base md:text-lg">
                <p>{activeFriend.letter}</p>
              </div>

              {/* Favorite Memory Callout */}
              <div className="bg-gradient-to-r from-purple-50 via-slate-50 to-pink-50 border-l-4 border-pink-600 rounded-r-2xl p-6 shadow-inner space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-widest text-pink-700 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-pink-600 animate-pulse" /> Favorite Memory Together
                </h5>
                <p className="text-sm md:text-base text-slate-800 italic font-light leading-relaxed">
                  "{activeFriend.favMemory}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Written by The Dhanu</span>
                <span className="flex items-center gap-1 text-purple-700 font-semibold">
                  <Heart className="w-3.5 h-3.5 text-pink-600 fill-current animate-pulse" /> Forever Bound
                </span>
              </div>
            </div>

            {/* Friendship Timeline */}
            <div className="glass-panel rounded-3xl p-8 md:p-12 border-slate-200 shadow-xl space-y-8 bg-white/80">
              <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                <h4 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-purple-600" /> Friendship Timeline
                </h4>
                <span className="text-xs text-slate-500 font-mono font-medium">4 Milestone Years</span>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-purple-600 before:via-pink-600 before:to-indigo-600">
                {activeFriend.timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-10 space-y-1 group"
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1 top-1.5 w-5 h-5 rounded-full bg-white border-2 border-purple-600 flex items-center justify-center shadow-sm group-hover:border-pink-600 group-hover:scale-125 transition duration-300">
                      <div className="w-2 h-2 rounded-full bg-purple-600 group-hover:bg-pink-600 transition duration-300" />
                    </div>

                    <span className="text-xs font-mono font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent block">
                      {item.year}
                    </span>
                    <p className="text-sm md:text-base text-slate-700 font-light leading-relaxed">
                      {item.event}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Back Button at Bottom Left */}
      <div className="max-w-7xl mx-auto flex justify-start pt-8">
        <button
          onClick={() => setActiveTab('gallery')}
          className="group flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-purple-600 transition duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center group-hover:border-purple-300 group-hover:bg-purple-50 group-hover:shadow-lg transition">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
          </div>
          <span className="text-base">Back to Gallery</span>
        </button>
      </div>
    </div>
  );
};
