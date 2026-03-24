import { Competition, LeaderboardEntry } from './types';

// Active competitions
export const competitions: Competition[] = [
  {
    id: '1',
    title: 'Summer Vibes Challenge',
    description: 'Create the ultimate summer anthem and win amazing prizes',
    prize: '₹5,000',
    participants: 234,
    deadline: '15 days left',
    status: 'active',
    category: 'Pop',
  },
  {
    id: '2',
    title: 'Electronic Beats Battle',
    description: 'Show us your best electronic production skills',
    prize: '₹3,000',
    participants: 189,
    deadline: '8 days left',
    status: 'active',
    category: 'Electronic',
  },
  {
    id: '3',
    title: 'Acoustic Sessions',
    description: 'Pure talent, no effects - just you and your instrument',
    prize: '₹2,500',
    participants: 156,
    deadline: '22 days left',
    status: 'active',
    category: 'Acoustic',
  },
];

// Leaderboard entries for the featured competition
export const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    name: 'Luna Eclipse',
    avatar: '/assets/generated/artist-profile-1.dim_300x300.png',
    score: 9850,
    votes: 1234,
    trend: 'up',
  },
  {
    rank: 2,
    name: 'Neon Dreams',
    avatar: '/assets/generated/artist-profile-4.dim_300x300.png',
    score: 9420,
    votes: 1156,
    trend: 'up',
  },
  {
    rank: 3,
    name: 'Stellar Waves',
    avatar: '/assets/generated/artist-profile-3.dim_300x300.png',
    score: 8990,
    votes: 1089,
    trend: 'down',
  },
  {
    rank: 4,
    name: 'The Midnight Riders',
    avatar: '/assets/generated/artist-profile-2.dim_300x300.png',
    score: 8765,
    votes: 1023,
    trend: 'up',
  },
  {
    rank: 5,
    name: 'Echo Valley',
    avatar: '/assets/generated/artist-profile-1.dim_300x300.png',
    score: 8234,
    votes: 967,
    trend: 'same',
  },
];
