import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Users, Heart, TrendingUp, Trophy } from 'lucide-react';
import { featuredArtists, trendingTracks } from '@/data/homeContent';
import { usePlayback } from '@/context/PlaybackContext';

export default function HomePage() {
  const navigate = useNavigate();
  const { playTrack } = usePlayback();

  return (
    <div className="container py-8 space-y-12">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-purple-600/80 to-pink-600/80" />
        <img
          src="/assets/generated/indian-concert-hero.dim_1200x400.png"
          alt="Hero Banner"
          className="w-full h-[300px] md:h-[400px] object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Discover Amazing Music
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Join the community where artists compete, fans discover, and everyone wins
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate({ to: '/competitions' })}
              className="bg-white text-primary hover:bg-white/90"
            >
              <Trophy className="mr-2 h-5 w-5" />
              Join Competitions
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate({ to: '/upload' })}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Start Creating
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Featured Artists</h2>
            <p className="text-muted-foreground mt-1">
              Discover talented artists from around the world
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredArtists.map((artist) => (
            <Card
              key={artist.id}
              className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              onClick={() => navigate({ to: '/artist/$artistId', params: { artistId: artist.id } })}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {artist.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {artist.genre}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{artist.followers}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trending Tracks */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Trending Tracks</h2>
            <p className="text-muted-foreground mt-1">
              The hottest tracks right now
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {trendingTracks.map((track) => (
            <Card
              key={track.id}
              className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      size="icon"
                      className="rounded-full h-14 w-14 bg-primary hover:bg-primary/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        playTrack(track);
                      }}
                      disabled={!track.audioSrc}
                    >
                      <Play className="h-6 w-6 fill-current" />
                    </Button>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 text-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold truncate group-hover:text-primary transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {track.artist}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      <span>{track.plays}</span>
                    </div>
                    <span>{track.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
