import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music, Disc } from 'lucide-react';
import { musicPlaylist } from '../data/friendsData';
import ReactPlayer from 'react-player';

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlay = false }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [volume, setVolume] = useState(1.0);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted && autoPlay && !isPlaying) {
        setIsPlaying(true);
        setHasInteracted(true);
      }
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [hasInteracted, autoPlay, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  const currentTrack = musicPlaylist[currentTrackIndex];

  // Handle Play / Pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle Next Track
  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % musicPlaylist.length);
    setIsPlaying(true);
  };

  // Handle Prev Track
  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + musicPlaylist.length) % musicPlaylist.length);
    setIsPlaying(true);
  };

  // Handle Volume Change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setShowPlaylist(false);
  };

  return (
    <div className="relative z-40 font-sans">
      {currentTrack.src.includes('youtu') ? (
        <ReactPlayer
          url={currentTrack.src}
          playing={isPlaying}
          volume={isMuted ? 0 : volume}
          onEnded={handleNext}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          width="1px"
          height="1px"
          className="absolute opacity-0 pointer-events-none"
          config={{
            youtube: { playerVars: { autoplay: 1 } }
          }}
        />
      ) : (
        <audio
          ref={audioRef}
          src={currentTrack.src}
          onEnded={handleNext}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="hidden"
        />
      )}
      <div className="glass-panel rounded-full px-4 py-2 flex items-center gap-3 shadow-md border border-slate-200 bg-white/90 backdrop-blur-xl">
        {/* Spinning Disc / Icon */}
        <div className="relative">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-[0_4px_10px_rgba(168,85,247,0.3)] ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }}>
            <Disc className="w-5 h-5 text-white" />
          </div>
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-600"></span>
            </span>
          )}
        </div>

        {/* Track Info */}
        <div className="hidden sm:flex flex-col min-w-[140px] max-w-[180px]">
          <span className="text-xs font-semibold text-slate-800 truncate flex items-center gap-1.5">
            <Music className="w-3 h-3 text-purple-600 shrink-0" />
            {currentTrack.title}
          </span>
          <span className="text-[10px] text-slate-500 truncate">{currentTrack.artist}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            className="p-1.5 text-slate-600 hover:text-purple-600 hover:bg-slate-100 rounded-full transition"
            title="Previous Track"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition shadow-md flex items-center justify-center w-9 h-9"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>

          <button
            onClick={handleNext}
            className="p-1.5 text-slate-600 hover:text-purple-600 hover:bg-slate-100 rounded-full transition"
            title="Next Track"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Volume */}
        <div className="hidden md:flex items-center gap-2 border-l border-slate-200 pl-3">
          <button
            onClick={toggleMute}
            className="text-slate-600 hover:text-purple-600 transition"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-pink-600" /> : <Volume2 className="w-4 h-4 text-purple-600" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-16 accent-purple-600 h-1 bg-slate-200 rounded-lg cursor-pointer"
          />
        </div>

        {/* Playlist Toggle */}
        <button
          onClick={() => setShowPlaylist(!showPlaylist)}
          className={`text-xs px-2.5 py-1 rounded-full border transition font-medium ${showPlaylist ? 'bg-purple-600 text-white border-purple-600 shadow-sm' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'}`}
        >
          Playlist
        </button>
      </div>

      {/* Playlist Dropdown Modal */}
      {showPlaylist && (
        <div className="absolute right-0 top-full mt-2 w-72 glass-panel rounded-2xl p-4 shadow-2xl border border-slate-200 bg-white/95 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
              <Disc className="w-3.5 h-3.5" /> Custom Farewell Playlist
            </h4>
            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">{musicPlaylist.length} Tracks</span>
          </div>

          <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
            {musicPlaylist.map((track, idx) => (
              <button
                key={track.id}
                onClick={() => selectTrack(idx)}
                className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between transition ${idx === currentTrackIndex ? 'bg-purple-50 border border-purple-200 text-purple-900 font-medium shadow-sm' : 'hover:bg-slate-50 text-slate-700'}`}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold ${idx === currentTrackIndex ? 'bg-purple-600 text-white shadow-[0_2px_8px_rgba(168,85,247,0.4)]' : 'bg-slate-100 text-slate-600'}`}>
                    {idx === currentTrackIndex && isPlaying ? (
                      <span className="flex items-center gap-0.5">
                        <span className="w-0.5 h-2 bg-white animate-pulse" />
                        <span className="w-0.5 h-3 bg-white animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <span className="w-0.5 h-1.5 bg-white animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </span>
                    ) : (
                      idx + 1
                    )}
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-semibold truncate">{track.title}</p>
                    <p className="text-[10px] text-slate-500 truncate">{track.artist}</p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-mono ml-2">{track.duration}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
