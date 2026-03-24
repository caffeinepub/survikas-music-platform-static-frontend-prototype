import { useParams, useNavigate } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Play, Heart, Share2, Users, Music, ArrowLeft } from 'lucide-react';
import { artistProfiles } from '@/data/artistContent';
import { usePlayback } from '@/context/PlaybackContext';

export default function ArtistProfilePage() {
  const { artistId } = useParams({ from: '/artist/$artistId' });
  const navigate = useNavigate();
  const { playTrack } = usePlayback();
  const artist = artistProfiles[artistId];

  if (!artist) {
    return (
      <div className="container py-8 text-center">
        <p className="text-muted-foreground">Artist not found</p>
        <Button onClick={() => navigate({ to: '/' })} className="mt-4">
          Go Home
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-6xl">
      <div className="space-y-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate({ to: '/' })}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Discover
        </Button>

        {/* Artist Header */}
        <Card>
          <CardContent className="p-0">
            {/* Cover Image */}
            <div className="h-64 bg-gradient-to-r from-primary via-purple-600 to-pink-600 relative">
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Artist Info */}
            <div className="px-6 pb-6">
              <div className="flex flex-col md:flex-row gap-6 -mt-20 relative">
                <Avatar className="h-40 w-40 border-4 border-background">
                  <AvatarImage src={artist.image} />
                  <AvatarFallback>{artist.name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1 md:mt-20">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h1 className="text-4xl font-bold mb-2">{artist.name}</h1>
                      <Badge variant="secondary" className="mb-3">
                        {artist.genre}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span className="font-semibold">{artist.followers}</span>
                        <span className="text-sm">followers</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="lg" className="gap-2">
                        <Users className="h-4 w-4" />
                        Follow
                      </Button>
                      <Button variant="outline" size="lg">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="mt-4 text-muted-foreground">{artist.bio}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Popular Tracks */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Popular Tracks</h2>
              <p className="text-muted-foreground mt-1">
                Most played songs by {artist.name}
              </p>
            </div>
            <Button variant="outline">
              <Music className="mr-2 h-4 w-4" />
              View All
            </Button>
          </div>

          <div className="space-y-3">
            {artist.tracks.map((track, index) => (
              <Card
                key={track.id}
                className="group hover:border-primary/50 transition-all cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-muted-foreground w-8">
                      {index + 1}
                    </span>

                    <div className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button
                          size="icon"
                          className="rounded-full h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation();
                            playTrack({ ...track, artist: artist.name });
                          }}
                          disabled={!track.audioSrc}
                        >
                          <Play className="h-3 w-3 fill-current" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg truncate group-hover:text-primary transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {artist.name}
                      </p>
                    </div>

                    <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Play className="h-3 w-3" />
                        <span>{track.plays}</span>
                      </div>
                      <span>{track.duration}</span>
                    </div>

                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <Music className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">{artist.tracks.length}</p>
              <p className="text-sm text-muted-foreground">Tracks</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Play className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <p className="text-2xl font-bold">
                {artist.tracks
                  .reduce((sum, t) => {
                    const plays = parseFloat(t.plays.replace('M', '')) * 1000000;
                    return sum + plays;
                  }, 0)
                  .toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">Total Plays</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-pink-500" />
              <p className="text-2xl font-bold">{artist.followers}</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
