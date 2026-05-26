import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, ArrowRight, Play, Compass, Clock, Calendar, Users, Award, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { groupCollagePhotos } from '../data/friendsData';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Calculate countdown to a future reunion date (e.g. 1 year from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setFullYear(targetDate.getFullYear() + 1);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 pt-20 md:pt-32 pb-16 px-4 max-w-7xl mx-auto space-y-24 md:space-y-36 font-sans">
      {/* 1. Fullscreen Hero Section */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center relative rounded-3xl overflow-hidden glass-panel p-6 md:p-16 border-slate-200 shadow-[0_10px_40px_rgba(100,116,139,0.15)] bg-white/70 backdrop-blur-2xl">
        {/* Absolute Background Image Overlay with Gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/60 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-purple-200 text-purple-800 text-xs md:text-sm font-semibold mb-8 shadow-sm backdrop-blur-md bg-white/90"
          >
            <Sparkles className="w-4 h-4 text-pink-600 animate-pulse" />
            <span>A Cinematic Tribute to 13 Extraordinary Souls</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold tracking-tight mb-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent leading-[1.1]"
          >
            Four Years.<br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              One Eternal Bond.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl text-slate-600 max-w-2xl mb-12 font-light leading-relaxed"
          >
            We arrived as strangers carrying boxes into crowded dorm rooms. We leave as a 13-person family scattered across the globe, bound by midnight diner runs, shared dreams, and echoes of laughter that will never fade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center"
          >
            <button
              onClick={() => { setActiveTab('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_6px_25px_rgba(236,72,153,0.4)] transition duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Enter Memories</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>

            <button
              onClick={() => { setActiveTab('videos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel hover:bg-slate-100 text-slate-800 font-semibold border-slate-300 transition duration-300 flex items-center justify-center gap-2 shadow-sm bg-white"
            >
              <Play className="w-4 h-4 text-purple-600 fill-current" />
              <span>Watch Highlight Reel</span>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center gap-8 text-xs text-slate-500 border-t border-slate-200 pt-8 w-full max-w-lg justify-center flex-wrap font-medium"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-600" />
              <span>13 Best Friends</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-pink-600" />
              <span>1,460 Days Together</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-indigo-600" />
              <span>5 Global Cities</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Group Photo Collage Section with smooth hover effects */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight bg-gradient-to-r from-slate-900 via-purple-950 to-slate-800 bg-clip-text text-transparent">
            Captured in Time
          </h2>
          <p className="text-slate-600 text-base font-light leading-relaxed">
            A visual mosaic of our wildest adventures, quietest Sunday mornings, and everything in between. Hover over each memory to bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {groupCollagePhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.95, y: -10, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              onClick={() => setSelectedImage(photo)}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden glass-panel p-2 shadow-lg border-slate-200 bg-white/80 cursor-pointer ${index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className="relative w-full h-64 md:h-full min-h-[260px] rounded-xl overflow-hidden shadow-inner">
                <img
                  src={photo}
                  alt={`Group memory ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out filter saturate-[0.85] group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition duration-300" />

                <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-between z-10">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 shadow-md flex items-center gap-1 border border-slate-200">
                    <Heart className="w-3 h-3 fill-current text-pink-600" /> Memory #{index + 1}
                  </span>
                  <span className="text-[10px] text-slate-100 bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm font-mono font-medium">
                    2022 - 2025
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Countdown & Forever Friends Quote Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Countdown Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden border-purple-200 shadow-[0_10px_40px_rgba(139,92,246,0.1)] bg-white/80 group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-purple-600/10 transition duration-500" />

          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-200 shadow-sm">
              <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Next Chapter Countdown</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-serif font-bold tracking-tight text-slate-900">
              Until Our First Official Reunion
            </h3>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              We may be boarding flights to Tokyo, London, Paris, Milan, and Silicon Valley, but our calendar is already marked. The countdown is officially on.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-8 relative z-10">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className="glass-panel bg-slate-50/90 rounded-2xl p-3 md:p-4 text-center border-slate-200 shadow-sm">
                <span className="block text-2xl md:text-4xl font-mono font-bold bg-gradient-to-b from-purple-900 to-indigo-600 bg-clip-text text-transparent mb-1">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden border-pink-200 shadow-[0_10px_40px_rgba(236,72,153,0.1)] bg-white/80 group"
        >
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-pink-600/10 transition duration-500" />

          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-semibold border border-pink-200 shadow-sm">
              <Award className="w-3.5 h-3.5" />
              <span>The Constellation Creed</span>
            </div>
            
            <blockquote className="text-xl md:text-3xl font-serif italic text-slate-900 leading-snug">
              "True friendship isn't about being inseparable. It's being separated and knowing nothing will ever change."
            </blockquote>

            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Every late-night study session, every burnt Sunday dinner, every shared triumph and quiet heartache built the foundation of who we are today. This website is our living digital time capsule.
            </p>
          </div>

          <div className="pt-8 flex items-center justify-between border-t border-slate-200 relative z-10">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                {groupCollagePhotos.slice(0, 4).map((img, i) => (
                  <img key={i} src={img} alt="Friend avatar" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm" />
                ))}
              </div>
              <span className="text-xs text-slate-600 font-medium">Signed by all 13 Friends</span>
            </div>

            <button
              onClick={() => { setActiveTab('letters'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xs font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1 transition group/btn"
            >
              <span>Read Letters</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition" />
            </button>
          </div>
        </motion.div>
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
