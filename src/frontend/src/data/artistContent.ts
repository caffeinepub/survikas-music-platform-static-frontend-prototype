import { ArtistProfile } from './types';

// Artist profiles keyed by artistId
export const artistProfiles: Record<string, ArtistProfile> = {
  '1': {
    id: '1',
    name: 'Omkar Jambhale',
    image: '/assets/Omkar Jambhale.jpeg',
    followers: '142K',
    genre: 'Marathi and Hindi Fusion',
    bio: 'Marathi and Hindi Fusion Singer creating soulful melodies that blend traditional Indian music with contemporary sounds. Known for heartfelt performances and unique vocal style.',
    tracks: [
      {
        id: '1',
        title: 'Man Guntale',
        cover: '/assets/Man Guntale.png',
        plays: '3.5M',
        duration: '3:58',
        audioSrc: '/assets/Chahun_main_ya_na.mp3',
        fallbackSrc: '/assets/Chahun_main_ya_na-1.mp3',
      },
      {
        id: '2',
        title: 'Chahun Main Ya Na',
        cover: '/assets/Chahun Main Ya Na.png',
        plays: '2.8M',
        duration: '4:12',
        audioSrc: '/assets/Chahun_main_ya_na.mp3',
      },
    ],
  },
  '2': {
    id: '2',
    name: 'Shivam Waswani',
    image: '/assets/Shivam Waswani.jpeg',
    followers: '98K',
    genre: 'Classical Fusion',
    bio: 'Classical Fusion artist blending traditional ragas with modern arrangements. Bringing ancient melodies to contemporary audiences.',
    tracks: [
      {
        id: '1',
        title: 'Raga Reimagined',
        cover: '/assets/generated/album-cover-2.dim_200x200.png',
        plays: '1.8M',
        duration: '5:23',
        audioSrc: '/assets/Chahun_main_ya_na.mp3',
      },
    ],
  },
  '3': {
    id: '3',
    name: 'Geet Yadav',
    image: '/assets/Geet Yadav.jpeg',
    followers: '76K',
    genre: 'Electronic',
    bio: 'Electronic music producer creating innovative soundscapes with Indian influences. Pushing boundaries of electronic music.',
    tracks: [
      {
        id: '1',
        title: 'Digital Dreams',
        cover: '/assets/generated/album-cover-3.dim_200x200.png',
        plays: '1.2M',
        duration: '4:05',
      },
    ],
  },
  '4': {
    id: '4',
    name: 'Dikshant',
    image: '/assets/Dikshant.jpeg',
    followers: '189K',
    genre: 'Hindi Soft Singing',
    bio: 'Hindi Soft Singing artist known for emotional ballads and soothing melodies. Creating music that touches hearts.',
    tracks: [
      {
        id: '1',
        title: 'Dil Ki Baatein',
        cover: '/assets/generated/album-cover-4.dim_200x200.png',
        plays: '2.1M',
        duration: '3:45',
      },
    ],
  },
  '5': {
    id: '5',
    name: 'Pragati Naagar',
    image: '/assets/Pragati Naagar.jpeg',
    followers: '125K',
    genre: 'Classical',
    bio: 'Classical vocalist preserving and promoting traditional Indian classical music. Trained in the Hindustani classical tradition.',
    tracks: [
      {
        id: '1',
        title: 'Swar Sangam',
        cover: '/assets/generated/album-cover-5.dim_200x200.png',
        plays: '1.6M',
        duration: '6:15',
      },
    ],
  },
};
