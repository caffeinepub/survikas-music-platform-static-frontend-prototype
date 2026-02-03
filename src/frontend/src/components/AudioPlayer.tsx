import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  audioSrc?: string;
  fallbackSrc?: string;
  coverImage: string;
  plays: string;
  likes: string;
  uploadDate: string;
}

export default function AudioPlayer({
  title,
  audioSrc,
  fallbackSrc,
  coverImage,
  plays,
  likes,
  uploadDate,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasAudio, setHasAudio] = useState(!!audioSrc);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Reset and auto-play when track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audioSrc) return;

    // Reset state for new track
    setCurrentTime(0);
    setDuration(0);
    setHasAudio(true);
    
    // Stop current playback
    audio.pause();
    audio.currentTime = 0;
    
    // Load new source
    audio.src = audioSrc;
    audio.load();
    
    // Auto-play new track
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('Auto-play failed:', error);
          setIsPlaying(false);
        });
    }
  }, [audioSrc, title]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      // Try fallback if available
      if (fallbackSrc && audio.src !== fallbackSrc) {
        audio.src = fallbackSrc;
        audio.load();
      } else {
        setHasAudio(false);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [fallbackSrc]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio || !hasAudio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-4">
        <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg truncate">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">
              Uploaded {uploadDate}
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Play className="h-3 w-3" />
              <span>{plays}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>❤️</span>
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </div>

      {hasAudio && audioSrc ? (
        <div className="space-y-2">
          <audio ref={audioRef} preload="metadata" />
          
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="default"
              onClick={togglePlayPause}
              className="h-10 w-10 rounded-full flex-shrink-0"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 fill-current" />
              ) : (
                <Play className="h-4 w-4 fill-current" />
              )}
            </Button>

            <div className="flex-1 flex items-center gap-2">
              <span className="text-xs text-muted-foreground min-w-[35px]">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0"
              />
              <span className="text-xs text-muted-foreground min-w-[35px]">
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
          <Button
            size="icon"
            variant="secondary"
            disabled
            className="h-10 w-10 rounded-full flex-shrink-0"
          >
            <Play className="h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Audio preview not available
          </p>
        </div>
      )}
    </div>
  );
}
