// Shared TypeScript types for the music platform prototype

export interface Artist {
  id: string;
  name: string;
  image: string;
  followers: string;
  genre: string;
}

export interface Track {
  id: string;
  title: string;
  artist?: string;
  cover: string;
  plays: string;
  duration: string;
  likes?: string;
  uploadDate?: string;
  audioSrc?: string;
  fallbackSrc?: string;
}

export interface ArtistProfile extends Artist {
  bio: string;
  tracks: Track[];
}

export interface Competition {
  id: string;
  title: string;
  description: string;
  prize: string;
  participants: number;
  deadline: string;
  status: string;
  category: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  score: number;
  votes: number;
  trend: 'up' | 'down' | 'same';
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  image: string;
  earned: boolean;
  date?: string;
  progress?: number;
}

export interface Transaction {
  id: string;
  type: 'earned' | 'spent';
  amount: number;
  description: string;
  date: string;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  cost: number;
  iconKey: string;
}

export interface UserProfile {
  name: string;
  avatar: string;
  bio: string;
  genres: string[];
  stats: {
    followers: string;
    following: string;
    totalPlays: string;
  };
}

export interface FollowingArtist {
  id: string;
  name: string;
  avatar: string;
  followers: string;
}

export interface Follower {
  id: string;
  name: string;
  avatar: string;
}
