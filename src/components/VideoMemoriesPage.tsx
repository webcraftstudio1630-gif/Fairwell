import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, X, Heart, Film, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { friendsData, Friend } from '../data/friendsData';
import highlightVid1 from '../data/highlights/WhatsApp Video 2026-05-25 at 10.57.48 PM.mp4';
import highlightVid2 from '../data/highlights/WhatsApp Video 2026-05-25 at 10.57.48 PM (1).mp4';
import highlightVid3 from '../data/highlights/WhatsApp Video 2026-05-25 at 10.57.48 PM (2).mp4';
import highlightVid4 from '../data/highlights/WhatsApp Video 2026-05-25 at 10.57.48 PM (3).mp4';
import highlightVid5 from '../data/highlights/WhatsApp Video 2026-05-25 at 10.57.48 PM (4).mp4';

const highlightVideos = [highlightVid1, highlightVid2, highlightVid3, highlightVid4, highlightVid5];

interface VideoMemoriesProps {
  setActiveTab: (tab: string) => void;
}

export const VideoMemoriesPage: React.FC<VideoMemoriesProps> = ({ setActiveTab }) => {
  const [selectedVideoFriend, setSelectedVideoFriend] = useState<Friend | null>(null);
  const [highlightIndex, setHighlightIndex] = useState(0);

  return (
    <div className="relative z-10 pt-20 md:pt-32 pb-16 px-4 max-w-7xl mx-auto space-y-16 font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-20 mb-2 shadow-sm"
        >
          <Film className="w-3.5 h-3.5" />
          <span>Cinematic Highlights & Motion Memories</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-r from-slate-900 via-purple-950 to-indigo-900 bg-clip-text text-transparent"
        >
          Video Memories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-600 text-base font-light leading-relaxed max-w-2xl mx-auto"
        >
          Watch the spontaneous laughter, late-night celebrations, and unfiltered joy that defined our university journey. Hover over any card for an instant preview, or click to enter the cinematic theater.
        </motion.p>
      </div>

      {/* Highlight Reel Hero Section */}
      <div className="glass-panel rounded-3xl p-6 md:p-12 border-purple-200 shadow-xl relative overflow-hidden group bg-white/80">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-semibold border border-pink-200 shadow-sm">
              <Award className="w-3.5 h-3.5 text-pink-600" />
              <span>Official Group Feature</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Best Moments Together <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Highlight Reel (2022 - 2025)
              </span>
            </h2>

            <p className="text-slate-600 text-base font-light leading-relaxed">
              A curated 5-minute documentary montage compiling our absolute wildest road trips, tearful graduation speeches, birthday surprises, and Sunday family dinners.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setSelectedVideoFriend(friendsData[0])}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_6px_25px_rgba(236,72,153,0.4)] transition duration-300 flex items-center gap-2 group/play"
              >
                <Play className="w-5 h-5 fill-current text-white group-hover/play:scale-110 transition" />
                <span>Play Full Documentary</span>
              </button>

              <span className="text-xs text-slate-500 font-mono flex items-center gap-1.5 font-medium">
                <Film className="w-4 h-4 text-purple-600" /> 1080p Ultra HD • 13 Friends
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden border border-purple-200 shadow-lg group-hover:border-pink-300 transition duration-500 group/reel">
              <video
                key={highlightVideos[highlightIndex]}
                src={highlightVideos[highlightIndex]}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter saturate-[0.9] group-hover:saturate-100 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/reel:opacity-100 transition-opacity duration-300 z-20">
                <button
                  onClick={(e) => { e.stopPropagation(); setHighlightIndex((prev) => (prev > 0 ? prev - 1 : highlightVideos.length - 1)); }}
                  className="p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setHighlightIndex((prev) => (prev < highlightVideos.length - 1 ? prev + 1 : 0)); }}
                  className="p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-purple-700 shadow-lg animate-pulse border border-slate-200">
                  <Play className="w-8 h-8 fill-current ml-1 text-purple-700" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 shadow-md">
                  Highlight {highlightIndex + 1} of {highlightVideos.length}
                </span>
                <span className="text-xs font-mono text-purple-800 bg-purple-100 px-2.5 py-1 rounded-lg border border-purple-300 font-bold">
                  LIVE MEMORY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Cinematic Modal Popup */}
      <AnimatePresence>
        {selectedVideoFriend && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-2xl p-4 md:p-8 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-4xl glass-panel rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white relative my-auto"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-purple-200 shrink-0 shadow-sm">
                    <img src={selectedVideoFriend.photo} alt={selectedVideoFriend.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-2">
                      {selectedVideoFriend.name}
                      <span className="text-xs uppercase tracking-widest font-mono text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200 shadow-sm">
                        {selectedVideoFriend.role}
                      </span>
                    </h3>
                    <p className="text-xs text-pink-600 font-medium">
                      "{selectedVideoFriend.nickname}"
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedVideoFriend(null)}
                  className="p-3 bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 rounded-full transition shadow-sm border border-slate-200"
                  aria-label="Close Modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative w-full aspect-video bg-black">
                <video
                  src={selectedVideoFriend.videoUrl}
                  autoPlay
                  controls
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Footer / Memory Caption */}
              <div className="p-6 md:p-8 bg-slate-50 space-y-4 border-t border-slate-200">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-semibold border border-pink-200 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                  <span>Memory Caption</span>
                </div>
                <p className="text-base md:text-lg text-slate-700 font-light leading-relaxed italic">
                  "{selectedVideoFriend.videoCaption}"
                </p>

                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-pink-600 fill-current animate-pulse" /> 13 Forever Friends
                    </span>
                    <span>•</span>
                    <span>Cinematic Vault 2026</span>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab('letters');
                      setSelectedVideoFriend(null);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition shadow-md w-full sm:w-auto text-center"
                  >
                    Read {selectedVideoFriend.name.split(' ')[0]}'s Open Letter
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
