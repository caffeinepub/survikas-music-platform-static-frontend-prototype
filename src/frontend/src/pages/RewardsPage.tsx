import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Coins, TrendingUp, Gift, Star, Zap, Crown, Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { badges, transactions, rewards, pointsData } from '@/data/rewardsContent';

// Map icon keys to actual lucide-react components
const iconMap: Record<string, any> = {
  Star,
  TrendingUp,
  Crown,
  Target,
};

export default function RewardsPage() {
  const { totalPoints, nextMilestone } = pointsData;
  const progress = (totalPoints / nextMilestone) * 100;

  return (
    <div className="container py-8 max-w-6xl">
      <div className="space-y-8">
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Award className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Rewards & Achievements</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Earn points, unlock badges, and redeem exclusive rewards
          </p>
        </section>

        {/* Points Balance */}
        <Card className="bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 border-primary/30">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground mb-2">Your Balance</p>
                <div className="flex items-center gap-3 mb-4">
                  <Coins className="h-8 w-8 text-yellow-500" />
                  <span className="text-5xl font-bold">{totalPoints.toLocaleString()}</span>
                  <span className="text-2xl text-muted-foreground">points</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {(nextMilestone - totalPoints).toLocaleString()} points until next milestone
                </p>
              </div>

              <div className="w-full md:w-64 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to {nextMilestone.toLocaleString()}</span>
                  <span className="font-semibold">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">Badges Earned</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <p className="text-2xl font-bold">+850</p>
              <p className="text-sm text-muted-foreground">This Week</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Gift className="h-8 w-8 mx-auto mb-2 text-pink-500" />
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Rewards Claimed</p>
            </CardContent>
          </Card>
        </div>

        {/* Badges */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Achievements</h2>
              <p className="text-muted-foreground mt-1">
                Unlock badges by completing challenges
              </p>
            </div>
            <Badge variant="secondary">
              {badges.filter((b) => b.earned).length} / {badges.length}
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((badge) => (
              <Card
                key={badge.id}
                className={`group hover:border-primary/50 transition-all ${
                  !badge.earned ? 'opacity-60' : ''
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img
                      src={badge.image}
                      alt={badge.name}
                      className={`w-20 h-20 mx-auto ${
                        !badge.earned ? 'grayscale' : 'group-hover:scale-110 transition-transform'
                      }`}
                    />
                    {badge.earned && (
                      <div className="absolute -top-1 -right-1 h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-white fill-current" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold mb-1">{badge.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {badge.description}
                  </p>
                  {badge.earned ? (
                    <Badge variant="outline" className="text-xs">
                      Earned {badge.date}
                    </Badge>
                  ) : (
                    <div className="space-y-1">
                      <Progress value={badge.progress || 0} className="h-1" />
                      <p className="text-xs text-muted-foreground">
                        {badge.progress || 0}% complete
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Redeem Rewards */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Redeem Rewards</h2>
            <p className="text-muted-foreground mt-1">
              Use your points to unlock exclusive perks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rewards.map((reward) => {
              const Icon = iconMap[reward.iconKey] || Star;
              const canAfford = totalPoints >= reward.cost;
              return (
                <Card
                  key={reward.id}
                  className={`group hover:border-primary/50 transition-all ${
                    !canAfford ? 'opacity-60' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{reward.name}</CardTitle>
                          <div className="flex items-center gap-1 mt-1">
                            <Coins className="h-4 w-4 text-yellow-500" />
                            <span className="font-semibold">{reward.cost}</span>
                            <span className="text-sm text-muted-foreground">points</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {reward.description}
                    </p>
                    <Button
                      disabled={!canAfford}
                      className="w-full"
                      variant={canAfford ? 'default' : 'outline'}
                    >
                      {canAfford ? 'Redeem Now' : 'Not Enough Points'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Transaction History */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Recent Activity</h2>
            <p className="text-muted-foreground mt-1">
              Your points earning and spending history
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-full ${
                          transaction.type === 'earned'
                            ? 'bg-green-500/10'
                            : 'bg-red-500/10'
                        }`}
                      >
                        {transaction.type === 'earned' ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                          <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.date}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`text-lg font-bold ${
                        transaction.type === 'earned'
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {transaction.amount > 0 ? '+' : ''}
                      {transaction.amount}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
