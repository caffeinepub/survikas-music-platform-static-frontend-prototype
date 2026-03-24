import { UserProfile, Track, FollowingArtist, Follower } from './types';

// User profile information
export const userProfile: UserProfile = {
  name: 'Omkar Jambhale',
  avatar: '/assets/Omkar Jambhale-1.jpeg',
  bio: 'Creating atmospheric electronic music that blends synthwave nostalgia with modern production. Based in Los Angeles. Available for collaborations and commissions.',
  genres: ['Marathi Hindi Fusion', 'Synthwave', 'Ambient'],
  stats: {
    followers: '125K',
    following: '48',
    totalPlays: '5.3M',
  },
};

// User's uploaded tracks
export const userTracks: Track[] = [
  {
    id: '1',
    title: 'Man Guntale',
    cover: '/assets/Man Guntale.png',
    plays: '2.4M',
    duration: '3:58',
    likes: '45K',
    uploadDate: '2 weeks ago',
    audioSrc: undefined, // No audio file available
  },
  {
    id: '2',
    title: 'Chahun Main Ya Na',
    cover: '/assets/Chahun Main Ya Na.png',
    plays: '2.9M',
    duration: '4:12',
    likes: '52K',
    uploadDate: '1 month ago',
    audioSrc: '/assets/Chahun_main_ya_na.mp3',
    fallbackSrc: '/assets/Chahun_main_ya_na-1.mp3',
  },
];

// Artists the user is following
export const following: FollowingArtist[] = [
  {
    id: '1',
    name: 'Neon Dreams',
    avatar: '/assets/generated/artist-profile-4.dim_300x300.png',
    followers: '156K',
  },
  {
    id: '2',
    name: 'Stellar Waves',
    avatar: '/assets/generated/artist-profile-3.dim_300x300.png',
    followers: '203K',
  },
  {
    id: '3',
    name: 'The Midnight Riders',
    avatar: '/assets/generated/artist-profile-2.dim_300x300.png',
    followers: '89K',
  },
];

// User's followers
export const followers: Follower[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: '/assets/generated/artist-profile-1.dim_300x300.png',
  },
  {
    id: '2',
    name: 'Sarah Williams',
    avatar: '/assets/generated/artist-profile-2.dim_300x300.png',
  },
  {
    id: '3',
    name: 'Mike Chen',
    avatar: '/assets/generated/artist-profile-3.dim_300x300.png',
  },
  {
    id: '4',
    name: 'Emma Davis',
    avatar: '/assets/generated/artist-profile-4.dim_300x300.png',
  },
];
