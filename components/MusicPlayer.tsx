import React, { useState } from 'react';
import { Music, VolumeX, Play, Pause } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Using a royalty free wedding instrumental for demo
  const [audio] = useState(new Audio('https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f3/Shenai_music.ogg/Shenai_music.ogg.mp3'));

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.log("Audio play failed (interaction required):", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 bg-gold text-maroon p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group border-2 border-maroon/20"
      aria-label="Toggle Music"
    >
      <div className={`absolute inset-0 bg-gold/30 rounded-full ${isPlaying ? 'animate-ping' : ''}`}></div>
      <div className="relative">
        {isPlaying ? <Pause size={24} /> : <Music size={24} />}
      </div>
    </button>
  );
};

export default MusicPlayer;