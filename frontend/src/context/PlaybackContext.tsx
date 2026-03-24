import { createContext, useContext, useState, ReactNode } from 'react';
import { Track } from '@/data/types';

interface PlaybackContextType {
  currentTrack: Track | null;
  playTrack: (track: Track) => void;
  closePlayer: () => void;
}

const PlaybackContext = createContext<PlaybackContextType | undefined>(undefined);

export function PlaybackProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
  };

  const closePlayer = () => {
    setCurrentTrack(null);
  };

  return (
    <PlaybackContext.Provider value={{ currentTrack, playTrack, closePlayer }}>
      {children}
    </PlaybackContext.Provider>
  );
}

export function usePlayback() {
  const context = useContext(PlaybackContext);
  if (context === undefined) {
    throw new Error('usePlayback must be used within a PlaybackProvider');
  }
  return context;
}
