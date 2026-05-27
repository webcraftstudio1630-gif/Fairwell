import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Heart, LogOut, LogIn, Shield, User as UserIcon } from 'lucide-react';
import { MusicPlayer } from './MusicPlayer';
import { AuthContext } from '../context/AuthContext';
import { friendsData } from '../data/friendsData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAdmin = user?.role === 'Admin';
  const friendData = !isAdmin && user ? friendsData.find(f => f.username === user.username) : null;

  const navItems = [
    { id: 'home', label: 'Home', showAlways: true },
    { id: 'gallery', label: 'Friends Gallery', requiresAuth: true },
    { id: 'letters', label: 'Personal Letters', requiresAuth: true },
    { id: 'videos', label: 'Video Memories', showAlways: true },
    { id: 'notes', label: 'Personal Notes', requiresAuth: true },
    { id: 'goodbye', label: 'Final Goodbye', showAlways: true },
  ].filter(item => item.showAlways || (item.requiresAuth && isAuthenticated));

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-600 p-0.5 shadow-[0_4px_15px_rgba(139,92,246,0.2)] group-hover:shadow-[0_4px_20px_rgba(236,72,153,0.3)] transition duration-300">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-600 group-hover:text-pink-600 transition duration-300" />
            </div>
          </div>
          <div>
            <span className="font-serif font-bold text-lg tracking-wider bg-gradient-to-r from-slate-900 via-purple-950 to-slate-800 bg-clip-text text-transparent block">
              Echoes of Us
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium flex items-center gap-1">
              13 Forever Friends <Heart className="w-2.5 h-2.5 text-pink-600 fill-current inline" />
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full shadow-md bg-white/80 backdrop-blur-md border border-slate-200/80">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-xs font-medium rounded-full transition duration-300 ${isActive ? 'text-purple-900 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-purple-50 rounded-full border border-purple-200 shadow-sm"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
          
          {isAuthenticated && user ? (
            <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200/60 ml-1">
              <button
                onClick={() => handleNavClick('profile')}
                className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full transition duration-300 border ${activeTab === 'profile' ? 'bg-purple-50 border-purple-200 shadow-sm' : 'bg-slate-50/50 border-slate-100 hover:bg-slate-100'}`}
              >
                {isAdmin ? (
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center border border-amber-200">
                    <Shield className="w-3 h-3 text-amber-600" />
                  </div>
                ) : friendData ? (
                  <img src={friendData.photo} alt="profile" className="w-5 h-5 rounded-full object-cover border border-purple-200" />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center border border-slate-300">
                    <UserIcon className="w-3 h-3 text-slate-500" />
                  </div>
                )}
                <span className={`text-[11px] font-bold tracking-wide ${isAdmin ? 'text-amber-700' : 'text-purple-900'}`}>
                  {user.username}
                </span>
              </button>
              <button
                onClick={() => { logout(); handleNavClick('home'); }}
                className="relative p-1.5 text-xs font-medium rounded-full transition duration-300 text-red-600 hover:bg-red-50 hover:text-red-700 flex items-center justify-center"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleNavClick('login')}
              className={`relative px-4 py-2 text-xs font-medium rounded-full transition duration-300 flex items-center gap-1 ${activeTab === 'login' ? 'bg-purple-100 text-purple-900' : 'text-purple-600 hover:bg-purple-50'}`}
            >
              <LogIn className="w-3.5 h-3.5" /> <span className="relative z-10">Login</span>
            </button>
          )}
        </nav>

        {/* Music Player & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <MusicPlayer autoPlay={true} />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 glass-panel rounded-full text-slate-700 hover:text-purple-600 transition shadow-sm border-slate-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 glass-panel rounded-2xl p-4 shadow-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 flex flex-col gap-2 z-50"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-1 px-3 border-b border-slate-100 pb-2">
              Navigation Menu
            </div>
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition flex items-center justify-between ${isActive ? 'bg-purple-50 border border-purple-200 text-purple-900 font-semibold shadow-sm' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-pink-600 animate-pulse" />}
                </button>
              );
            })}
            
            <div className="border-t border-slate-100 mt-1 pt-2">
              {isAuthenticated && user ? (
                <>
                  <button
                    onClick={() => handleNavClick('profile')}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition flex items-center justify-between text-purple-700 hover:bg-purple-50"
                  >
                    <span className="flex items-center gap-2">
                      {isAdmin ? (
                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center border border-amber-200">
                          <Shield className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                      ) : friendData ? (
                        <img src={friendData.photo} alt="profile" className="w-6 h-6 rounded-full object-cover border border-purple-200" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center border border-slate-300">
                          <UserIcon className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                      )}
                      My Profile
                    </span>
                  </button>
                  <button
                    onClick={() => { logout(); handleNavClick('home'); }}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition flex items-center justify-between text-red-600 hover:bg-red-50"
                  >
                    <span className="flex items-center gap-2"><LogOut className="w-4 h-4" /> Logout</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleNavClick('login')}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition flex items-center justify-between text-purple-700 hover:bg-purple-50"
                >
                  <span className="flex items-center gap-2"><LogIn className="w-4 h-4" /> Login</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
