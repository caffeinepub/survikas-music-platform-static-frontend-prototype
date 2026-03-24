import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Users, Calendar, Clock, Award, TrendingUp } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { competitions, leaderboard } from '@/data/competitionsContent';

export default function CompetitionsPage() {
  return (
    <div className="container py-8 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
          <Trophy className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Competitions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Compete with artists worldwide, showcase your talent, and win amazing prizes
        </p>
      </section>

      {/* Active Competitions */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Active Competitions</h2>
          <Badge variant="secondary" className="text-sm">
            {competitions.length} Active
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {competitions.map((competition) => (
            <Card
              key={competition.id}
              className="group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="default" className="bg-primary/20 text-primary hover:bg-primary/30">
                    {competition.category}
                  </Badge>
                  <Badge variant="outline" className="border-green-500/50 text-green-500">
                    {competition.status}
                  </Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {competition.title}
                </CardTitle>
                <CardDescription>{competition.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">Prize</p>
                      <p className="font-semibold">{competition.prize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Participants</p>
                      <p className="font-semibold">{competition.participants}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{competition.deadline}</span>
                </div>
                <Button className="w-full" size="lg">
                  <Trophy className="mr-2 h-4 w-4" />
                  Join Competition
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Leaderboard */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Current Leaderboard</h2>
            <p className="text-muted-foreground mt-1">
              Top performers in Summer Vibes Challenge
            </p>
          </div>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            View All
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Rank</TableHead>
                  <TableHead>Artist</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                  <TableHead className="text-right">Votes</TableHead>
                  <TableHead className="text-right">Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboard.map((entry) => (
                  <TableRow key={entry.rank} className="hover:bg-accent/50">
                    <TableCell>
                      <div className="flex items-center justify-center">
                        {entry.rank <= 3 ? (
                          <div
                            className={`flex items-center justify-center h-8 w-8 rounded-full font-bold ${
                              entry.rank === 1
                                ? 'bg-yellow-500/20 text-yellow-500'
                                : entry.rank === 2
                                ? 'bg-gray-400/20 text-gray-400'
                                : 'bg-orange-500/20 text-orange-500'
                            }`}
                          >
                            {entry.rank}
                          </div>
                        ) : (
                          <span className="font-semibold">{entry.rank}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={entry.avatar} alt={entry.name} />
                          <AvatarFallback>{entry.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{entry.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {entry.score.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {entry.votes.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {entry.trend === 'up' && (
                        <TrendingUp className="h-4 w-4 text-green-500 inline" />
                      )}
                      {entry.trend === 'down' && (
                        <TrendingUp className="h-4 w-4 text-red-500 inline rotate-180" />
                      )}
                      {entry.trend === 'same' && (
                        <div className="h-0.5 w-4 bg-muted-foreground inline-block" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Competition Rules */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <CardTitle>Submit Your Track</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Upload your original music to any active competition that matches your style
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <CardTitle>Get Votes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Share your entry with the community and collect votes from fans and fellow artists
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <CardTitle>Win Prizes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Top entries win cash prizes, exposure, and exclusive opportunities
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
