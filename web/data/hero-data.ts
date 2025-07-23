export interface HorizontalSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  author: string;
}

export interface VerticalSlide {
  id: number;
  image: string;
  title: string;
  description?: string;
  author?: string;
}

export const horizontalSlides: HorizontalSlide[] = [
  {
    id: 1,
    image: '/images/boxing-1.jpg',
    title: 'Boxing',
    description: 'The Art of the Sweet Science',
    author: 'Mike Johnson'
  },
  {
    id: 2,
    image: '/images/boxing-2.jpg',
    title: 'Boxing',
    description: 'Championship Night',
    author: 'Sarah Williams'
  },
  {
    id: 3,
    image: '/images/boxing-3.jpg',
    title: 'Boxing',
    description: 'Undisputed Glory',
    author: 'David Chen'
  },
  {
    id: 4,
    image: '/images/boxing-4.jpg',
    title: 'Boxing',
    description: 'Legacy of Legends',
    author: 'Emma Rodriguez'
  }
];

export const verticalSlides: VerticalSlide[] = [
  {
    id: 1,
    image: '/images/basketball-1.jpg',
    title: 'Basketball',
    description: 'Court Kings',
    author: 'Alex Thompson'
  },
  {
    id: 2,
    image: '/images/football-1.jpg',
    title: 'Football',
    description: 'Gridiron Glory',
    author: 'Marcus Davis'
  },
  {
    id: 3,
    image: '/images/tennis-1.jpg',
    title: 'Tennis',
    description: 'Grand Slam Dreams',
    author: 'Sophie Anderson'
  },
  {
    id: 4,
    image: '/images/soccer-1.jpg',
    title: 'Soccer',
    description: 'Beautiful Game',
    author: 'Carlos Rodriguez'
  },
  {
    id: 5,
    image: '/images/baseball-1.jpg',
    title: 'Baseball',
    description: 'America\'s Pastime',
    author: 'Jake Wilson'
  },
  {
    id: 6,
    image: '/images/hockey-1.jpg',
    title: 'Hockey',
    description: 'Ice Warriors',
    author: 'Connor O\'Brien'
  }
]; 