import { Outlet, useNavigate, useRouterState } from '@tanstack/react-router';
import { Home, Trophy, Upload, User, Award, Music, X } from 'lucide-react';
import { Button } from './ui/button';
import { PlaybackProvider, usePlayback } from '@/context/PlaybackContext';
import AudioPlayer from './AudioPlayer';
import { Card, CardContent } from './ui/card';

function LayoutContent() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { currentTrack, closePlayer } = usePlayback();

  const navItems = [
    { path: '/', label: 'Discover', icon: Home },
    { path: '/competitions', label: 'Competitions', icon: Trophy },
    { path: '/upload', label: 'Upload', icon: Upload },
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/rewards', label: 'Rewards', icon: Award },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate({ to: '/' })}>
            <img 
              src="/assets/generated/survikas-logo-transparent.dim_200x80.png" 
              alt="Survikas" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <Button
                  key={item.path}
                  variant={isActive ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => navigate({ to: item.path })}
                  className="gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Music className="h-5 w-5 text-primary animate-pulse" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Audio Player */}
      {currentTrack && (
        <div className="fixed bottom-20 md:bottom-4 left-4 right-4 z-40 animate-in slide-in-from-bottom-4">
          <Card className="border-primary/50 shadow-lg shadow-primary/10">
            <CardContent className="p-4">
              <div className="flex items-start gap-2 mb-3">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Now Playing</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 -mt-1"
                  onClick={closePlayer}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <AudioPlayer
                title={currentTrack.title}
                audioSrc={currentTrack.audioSrc}
                fallbackSrc={currentTrack.fallbackSrc}
                coverImage={currentTrack.cover}
                plays={currentTrack.plays}
                likes={currentTrack.likes || '0'}
                uploadDate={currentTrack.uploadDate || 'Recently'}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate({ to: item.path })}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/50 backdrop-blur mb-16 md:mb-0">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2026. Built with</span>
              <span className="text-red-500">♥</span>
              <span>using</span>
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              Survikas - Where Music Meets Community
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Layout() {
  return (
    <PlaybackProvider>
      <LayoutContent />
    </PlaybackProvider>
  );
}
