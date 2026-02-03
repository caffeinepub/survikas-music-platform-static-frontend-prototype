import { Badge, Transaction, Reward } from './types';

// User's earned and available badges
export const badges: Badge[] = [
  {
    id: '1',
    name: 'First Upload',
    description: 'Uploaded your first track',
    image: '/assets/generated/badge-first-upload.dim_100x100.png',
    earned: true,
    date: '2 weeks ago',
  },
  {
    id: '2',
    name: 'Top Artist',
    description: 'Reached top 10 in a competition',
    image: '/assets/generated/badge-top-artist.dim_100x100.png',
    earned: true,
    date: '1 week ago',
  },
  {
    id: '3',
    name: 'Competition Winner',
    description: 'Won a competition',
    image: '/assets/generated/badge-winner.dim_100x100.png',
    earned: false,
    progress: 75,
  },
  {
    id: '4',
    name: 'Fan Favorite',
    description: 'Received 10,000 likes',
    image: '/assets/generated/badge-favorite.dim_100x100.png',
    earned: true,
    date: '3 days ago',
  },
];

// Points transaction history
export const transactions: Transaction[] = [
  {
    id: '1',
    type: 'earned',
    amount: 500,
    description: 'Competition participation reward',
    date: '2 hours ago',
  },
  {
    id: '2',
    type: 'earned',
    amount: 250,
    description: 'Daily login bonus',
    date: '1 day ago',
  },
  {
    id: '3',
    type: 'spent',
    amount: -100,
    description: 'Featured track promotion',
    date: '2 days ago',
  },
  {
    id: '4',
    type: 'earned',
    amount: 1000,
    description: 'Top 10 leaderboard bonus',
    date: '1 week ago',
  },
];

// Redeemable rewards (iconKey maps to lucide-react icon names)
export const rewards: Reward[] = [
  {
    id: '1',
    name: 'Featured Placement',
    description: 'Get your track featured on the homepage for 24 hours',
    cost: 500,
    iconKey: 'Star',
  },
  {
    id: '2',
    name: 'Profile Boost',
    description: 'Boost your profile visibility for 7 days',
    cost: 750,
    iconKey: 'TrendingUp',
  },
  {
    id: '3',
    name: 'Premium Badge',
    description: 'Display a premium badge on your profile for 30 days',
    cost: 1000,
    iconKey: 'Crown',
  },
  {
    id: '4',
    name: 'Competition Entry',
    description: 'Free entry to any premium competition',
    cost: 300,
    iconKey: 'Target',
  },
];

// Points balance and milestone
export const pointsData = {
  totalPoints: 3450,
  nextMilestone: 5000,
};
