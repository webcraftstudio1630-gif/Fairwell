import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { FriendsGalleryPage } from './components/FriendsGalleryPage';
import { PersonalLettersPage } from './components/PersonalLettersPage';
import { VideoMemoriesPage } from './components/VideoMemoriesPage';
import { FinalGoodbyePage } from './components/FinalGoodbyePage';
import { Footer } from './components/Footer';
import { LoginPage } from './components/LoginPage';
import { PersonalNotesPage } from './components/PersonalNotesPage';
import { ProfilePage } from './components/ProfilePage';
import { AuthContext } from './context/AuthContext';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedFriendId, setSelectedFriendId] = useState<string | null>(null);
  const { isAuthenticated } = React.useContext(AuthContext);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-purple-500/20 selection:text-purple-900 overflow-x-hidden relative">
      {/* Cinematic Loading Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Persistent Background Particles & Ambient Glow for Light Theme */}
      <ParticlesBackground density={35} speed={0.3} color="#8b5cf6" glow={true} />

      {/* Main Content Appears After Loading */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col min-h-screen"
        >
          {/* Responsive Navbar & Music Player */}
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Main View Area */}
          <main className="grow">
            <AnimatePresence mode="wait">
              {activeTab === 'login' && (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <LoginPage setActiveTab={setActiveTab} />
                </motion.div>
              )}

              {activeTab === 'notes' && (
                <motion.div
                  key="notes"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {isAuthenticated ? <PersonalNotesPage /> : <LoginPage setActiveTab={setActiveTab} />}
                </motion.div>
              )}

              {activeTab === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {isAuthenticated ? <ProfilePage /> : <LoginPage setActiveTab={setActiveTab} />}
                </motion.div>
              )}

              {activeTab === 'home' && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <HomePage setActiveTab={setActiveTab} />
                </motion.div>
              )}

              {activeTab === 'gallery' && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {isAuthenticated ? (
                    <FriendsGalleryPage
                      setActiveTab={setActiveTab}
                      setSelectedFriendId={setSelectedFriendId}
                    />
                  ) : <LoginPage setActiveTab={setActiveTab} />}
                </motion.div>
              )}

              {activeTab === 'letters' && (
                <motion.div
                  key="letters"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {isAuthenticated ? (
                    <PersonalLettersPage
                      setActiveTab={setActiveTab}
                      selectedFriendId={selectedFriendId}
                      setSelectedFriendId={setSelectedFriendId}
                    />
                  ) : <LoginPage setActiveTab={setActiveTab} />}
                </motion.div>
              )}

              {activeTab === 'videos' && (
                <motion.div
                  key="videos"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <VideoMemoriesPage setActiveTab={setActiveTab} />
                </motion.div>
              )}

              {activeTab === 'goodbye' && (
                <motion.div
                  key="goodbye"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <FinalGoodbyePage setActiveTab={setActiveTab} />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Elegant Footer */}
          <Footer setActiveTab={setActiveTab} />
        </motion.div>
      )}
    </div>
  );
};

export default App;
