import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 600);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 text-slate-900 px-4 overflow-hidden"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Background glow effects for light theme */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[100px] pointer-events-none animation-delay-2000" />

      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-4 text-purple-600"
        >
          <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="tracking-widest uppercase text-xs font-semibold bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-200 shadow-sm">
            Cinematic Farewell Experience
          </span>
          <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '6s' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4 bg-gradient-to-r from-slate-900 via-purple-950 to-pink-900 bg-clip-text text-transparent"
        >
          Echoes of Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 mb-12 font-light flex items-center justify-center gap-2"
        >
          <span>13 Friends</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 inline-block" />
          <span>Countless Memories</span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-600 inline-block" />
          <span>One Eternal Bond</span>
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full max-w-xs bg-slate-200/80 rounded-full h-2 p-0.5 border border-slate-300 mb-4 overflow-hidden shadow-inner"
        >
          <motion.div
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 h-full rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-between w-full max-w-xs text-xs text-slate-500 px-1"
        >
          <span className="flex items-center gap-1 font-mono font-medium">
            <Heart className="w-3.5 h-3.5 text-pink-600 animate-pulse fill-current" /> Loading Memories...
          </span>
          <span className="font-mono text-purple-700 font-bold">{progress}%</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
