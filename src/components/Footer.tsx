import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white/80 backdrop-blur-xl pt-16 pb-12 px-4 mt-24 overflow-hidden shadow-sm">
      {/* Background glow for light theme */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-600 p-0.5 shadow-[0_4px_15px_rgba(168,85,247,0.2)] mb-6">
          <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
            <Heart className="w-6 h-6 text-pink-600 fill-current animate-pulse" />
          </div>
        </div>

        <h3 className="text-2xl md:text-4xl font-serif font-bold tracking-tight mb-4 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-800 bg-clip-text text-transparent max-w-2xl">
          "No matter where life takes us, these memories will stay forever."
        </h3>

        <p className="text-sm md:text-base text-slate-600 max-w-xl mb-10 font-light leading-relaxed">
          Dedicated to the 13 friends who turned a university chapter into an unforgettable lifetime legacy. Here's to the late nights, the endless laughter, and the future reunions.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-xs uppercase tracking-widest font-semibold text-slate-500">
          <button onClick={() => { setActiveTab('home'); scrollToTop(); }} className="hover:text-purple-700 transition">Home</button>
          <button onClick={() => { setActiveTab('gallery'); scrollToTop(); }} className="hover:text-purple-700 transition">Friends Gallery</button>
          <button onClick={() => { setActiveTab('letters'); scrollToTop(); }} className="hover:text-purple-700 transition">Personal Letters</button>
          <button onClick={() => { setActiveTab('videos'); scrollToTop(); }} className="hover:text-purple-700 transition">Video Memories</button>
          <button onClick={() => { setActiveTab('goodbye'); scrollToTop(); }} className="hover:text-purple-700 transition">Final Goodbye</button>
        </div>

        <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl text-xs text-slate-500 gap-4 font-medium">
          <p className="flex items-center gap-1.5 font-mono">
            <span>© 2026 Echoes of Us.</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-600 inline" />
            <span>Built with Love & Clean Glassmorphism.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-slate-700 hover:text-purple-700 hover:border-purple-300 transition group shadow-sm bg-white"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition" />
          </button>
        </div>
      </div>
    </footer>
  );
};
