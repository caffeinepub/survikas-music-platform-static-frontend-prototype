import { Artist, Track } from './types';

// Featured artists displayed on the home page
export const featuredArtists: Artist[] = [
  {
    id: '1',
    name: 'Omkar Jambhale',
    image: '/assets/Omkar Jambhale.jpeg',
    followers: '142K',
    genre: 'Marathi and Hindi Fusion',
  },
  {
    id: '2',
    name: 'Shivam Waswani',
    image: '/assets/Shivam Waswani.jpeg',
    followers: '98K',
    genre: 'Classical Fusion',
  },
  {
    id: '3',
    name: 'Geet Yadav',
    image: '/assets/Geet Yadav.jpeg',
    followers: '76K',
    genre: 'Electronic',
  },
  {
    id: '4',
    name: 'Dikshant',
    image: '/assets/Dikshant.jpeg',
    followers: '189K',
    genre: 'Hindi Soft Singing',
  },
  {
    id: '5',
    name: 'Pragati Naagar',
    image: '/assets/Pragati Naagar.jpeg',
    followers: '125K',
    genre: 'Classical',
  },
];

// Trending tracks displayed on the home page
export const trendingTracks: Track[] = [
  {
    id: '1',
    title: 'Agniputra Sambhaji',
    artist: 'Pravin Ranadhire',
    cover: '/assets/ChatGPT Image Feb 2, 2026, 02_18_05 AM.png',
    plays: '2.8M',
    duration: '4:32',
  },
  {
    id: '2',
    title: 'Man Guntale',
    artist: 'Omkar Jambhale',
    cover: '/assets/ChatGPT Image Feb 2, 2026, 02_02_59 AM.png',
    plays: '3.5M',
    duration: '3:58',
    audioSrc: '/assets/Chahun_main_ya_na.mp3',
    fallbackSrc: '/assets/Chahun_main_ya_na-1.mp3',
  },
  {
    id: '3',
    title: 'Adhoore Lafzon Ki Baarish',
    artist: 'Kunal Vairag',
    cover: '/assets/ChatGPT Image Feb 2, 2026, 01_59_05 AM.png',
    plays: '4.1M',
    duration: '4:15',
    audioSrc: '/assets/Chahun_main_ya_na.mp3',
  },
  {
    id: '4',
    title: 'Main Abhi Baaki Hoon',
    artist: 'Aarav Nishkal',
    cover: '/assets/ChatGPT Image Feb 2, 2026, 01_54_05 AM.png',
    plays: '5.2M',
    duration: '3:45',
    audioSrc: '/assets/Chahun_main_ya_na.mp3',
  },
  {
    id: '5',
    title: 'Hum Jo Kabhi The',
    artist: 'Ishaan Veerma',
    cover: '/assets/ChatGPT Image Feb 2, 2026, 01_52_20 AM.png',
    plays: '3.9M',
    duration: '4:08',
  },
];
