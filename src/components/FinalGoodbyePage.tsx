import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Compass, Play, ArrowRight, X } from 'lucide-react';
import { friendsData, groupCollagePhotos } from '../data/friendsData';

interface FinalGoodbyeProps {
  setActiveTab: (tab: string) => void;
}

export const FinalGoodbyePage: React.FC<FinalGoodbyeProps> = ({ setActiveTab }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative z-10 pt-20 md:pt-32 pb-16 px-4 max-w-7xl mx-auto space-y-24 md:space-y-36 font-sans">
      {/* 1. Emotional Ending Screen & Animated Thank-You */}
      <section className="text-center max-w-4xl mx-auto space-y-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-purple-200 text-purple-800 text-xs md:text-sm font-semibold shadow-sm backdrop-blur-md mx-auto bg-white/90"
        >
          <Star className="w-4 h-4 text-amber-500 fill-current animate-spin" style={{ animationDuration: '6s' }} />
          <span>The Closing Chapter of Our Constellation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold tracking-tight bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent leading-tight"
        >
          Thank You for the <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
            Best Years of Our Lives.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We entered this journey seeking an education, but we leave with something infinitely more valuable: a family of 13 extraordinary souls whose lives will be forever intertwined.
        </motion.p>
      </section>

      {/* 2. Display All Friends' Names in Glowing Typography */}
      <section className="space-y-12 max-w-5xl mx-auto text-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            The 13 Eternal Echoes
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            Hover over each name to feel the warm resonance of our friendship.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 p-6 md:p-12 glass-panel rounded-3xl border-purple-200 shadow-xl bg-white/80 backdrop-blur-2xl">
          {friendsData.map((friend, index) => (
            <motion.div
              key={friend.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative px-6 py-3 rounded-2xl glass-panel bg-slate-50 border-slate-200 hover:border-purple-300 hover:shadow-[0_4px_20px_rgba(168,85,247,0.2)] transition duration-300 cursor-default shadow-sm"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-lg md:text-2xl font-serif font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 group-hover:from-purple-900 group-hover:via-purple-950 group-hover:to-pink-900 bg-clip-text text-transparent transition duration-300">
                  {friend.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-pink-600 font-mono mt-0.5 font-medium">
                  "{friend.nickname}"
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Memory Wall with Floating Photos */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Floating Memory Wall
          </h2>
          <p className="text-slate-600 text-base font-light">
            A snapshot tapestry of our shared history. These moments will remain preserved in our digital vault forever.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {groupCollagePhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.95, y: -10, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              onClick={() => setSelectedImage(photo)}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden glass-panel p-2 shadow-lg border-slate-200 bg-white/80 cursor-pointer ${index % 5 === 0 ? 'md:-translate-y-4' : index % 3 === 0 ? 'md:translate-y-4' : ''}`}
            >
              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden shadow-inner">
                <img
                  src={photo}
                  alt={`Memory snapshot ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out filter saturate-[0.85] group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition duration-300" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 shadow-md flex items-center gap-1 border border-slate-200">
                    <Heart className="w-3 h-3 fill-current text-pink-600" /> Eternal
                  </span>
                  <span className="text-[10px] text-slate-100 bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur-sm font-mono font-medium">
                    Vault #{index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Final Group Video Section */}
      <section className="glass-panel rounded-3xl p-8 md:p-16 border-pink-200 shadow-xl relative overflow-hidden group bg-white/80">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-700 text-xs font-semibold border border-pink-200 mx-auto shadow-sm">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>The Ultimate Sendoff</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            "See You Again" — The Final Toast
          </h2>

          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Grab a tissue, press play, and relive our final emotional evening together on the rooftop before the moving trucks arrived. This isn't goodbye; it's simply "until next time."
          </p>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-pink-200 shadow-2xl group-hover:border-purple-300 transition duration-500 max-w-3xl mx-auto bg-black">
            <video
              src="https://assets.mixkit.co/videos/preview/mixkit-friends-toasting-with-beer-bottles-42812-large.mp4"
              autoPlay
              loop
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-purple-600" />
              <span>Scattered across 5 global cities, but forever united in spirit.</span>
            </div>
            
            <button
              onClick={() => { setActiveTab('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-purple-700 hover:text-purple-900 font-semibold flex items-center gap-1 transition group/link"
            >
              <span>Revisit Friends Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. End Quote: "No matter where life takes us..." */}
      <section className="text-center py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-indigo-600/5 rounded-3xl blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 px-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-600 p-0.5 shadow-[0_4px_20px_rgba(168,85,247,0.3)] mx-auto animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <Heart className="w-8 h-8 text-pink-600 fill-current animate-pulse" />
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-r from-slate-900 via-purple-950 to-slate-800 bg-clip-text text-transparent leading-tight max-w-3xl mx-auto"
          >
            "No matter where life takes us, these memories will stay forever."
          </motion.h2>

          <p className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-mono font-semibold">
            Long Live The 13 • 2022 — Infinity
          </p>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
              exit={{ scale: 0.5, y: 100, opacity: 0 }}
              src={selectedImage}
              alt="Maximized memory"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
