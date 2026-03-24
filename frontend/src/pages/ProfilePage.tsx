import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Music, Users, Heart, Edit, Share2 } from 'lucide-react';
import AudioPlayer from '@/components/AudioPlayer';
import { userProfile, userTracks, following, followers } from '@/data/profileContent';

export default function ProfilePage() {
  return (
    <div className="container py-8 max-w-6xl">
      <div className="space-y-8">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-0">
            {/* Cover Image */}
            <div className="h-48 bg-gradient-to-r from-primary via-purple-600 to-pink-600 relative">
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Profile Info */}
            <div className="px-6 pb-6">
              <div className="flex flex-col md:flex-row gap-6 -mt-16 relative">
                <Avatar className="h-32 w-32 border-4 border-background">
                  <AvatarImage src={userProfile.avatar} />
                  <AvatarFallback>{userProfile.name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1 md:mt-16">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                      <p className="text-muted-foreground mt-1">
                        Electronic music producer & DJ
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {userProfile.genres.map((genre) => (
                          <Badge key={genre} variant="secondary">{genre}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                      <Button variant="outline" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mt-6">
                    <div>
                      <p className="text-2xl font-bold">{userProfile.stats.followers}</p>
                      <p className="text-sm text-muted-foreground">Followers</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{userProfile.stats.following}</p>
                      <p className="text-sm text-muted-foreground">Following</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{userProfile.stats.totalPlays}</p>
                      <p className="text-sm text-muted-foreground">Total Plays</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-muted-foreground">
                {userProfile.bio}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="tracks" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="tracks">
              <Music className="mr-2 h-4 w-4" />
              Tracks
            </TabsTrigger>
            <TabsTrigger value="following">
              <Users className="mr-2 h-4 w-4" />
              Following
            </TabsTrigger>
            <TabsTrigger value="followers">
              <Heart className="mr-2 h-4 w-4" />
              Followers
            </TabsTrigger>
          </TabsList>

          {/* Tracks Tab */}
          <TabsContent value="tracks" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Tracks</h2>
              <Badge variant="secondary">{userTracks.length} tracks</Badge>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {userTracks.map((track) => (
                <Card key={track.id} className="hover:border-primary/50 transition-all">
                  <CardContent className="p-4">
                    <AudioPlayer
                      title={track.title}
                      audioSrc={track.audioSrc}
                      fallbackSrc={track.fallbackSrc}
                      coverImage={track.cover}
                      plays={track.plays}
                      likes={track.likes || '0'}
                      uploadDate={track.uploadDate || 'Unknown'}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Following Tab */}
          <TabsContent value="following" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Following</h2>
              <Badge variant="secondary">{following.length} artists</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {following.map((artist) => (
                <Card key={artist.id} className="group hover:border-primary/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={artist.avatar} />
                      <AvatarFallback>{artist.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {artist.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {artist.followers} followers
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Unfollow
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Followers Tab */}
          <TabsContent value="followers" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Followers</h2>
              <Badge variant="secondary">{followers.length} followers</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {followers.map((follower) => (
                <Card key={follower.id} className="group hover:border-primary/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-20 w-20 mx-auto mb-3">
                      <AvatarImage src={follower.avatar} />
                      <AvatarFallback>{follower.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-medium mb-3 group-hover:text-primary transition-colors">
                      {follower.name}
                    </h3>
                    <Button variant="outline" size="sm" className="w-full">
                      Follow Back
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
