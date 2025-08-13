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
    image: 'https://images.unsplash.com/photo-1542720046-1e772598ea39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFydCUyMG9mJTIwc3dlZXQlMjBzY2llbmNlJTIwYm94aW5nfGVufDB8fDB8fHww',
    title: 'Boxing',
    description: 'The Art of the Sweet Science',
    author: 'Mike Johnson'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    title: 'Boxing',
    description: 'Championship Night',
    author: 'Sarah Williams'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1486215397028-cb4f31efea3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5kaXNwdXRlZCUyMGdsb3J5JTIwYm94aW5nfGVufDB8fDB8fHww',
    title: 'Boxing',
    description: 'Undisputed Glory',
    author: 'David Chen'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1563198797-24d96c7f865c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVnYWN5JTIwb2YlMjBMZW5nZW5kcyUyMGJveGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Boxing',
    description: 'Legacy of Legends',
    author: 'Emma Rodriguez'
  }
];

export const verticalSlides: VerticalSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Basketball',
    description: 'Court Kings',
    author: 'Alex Thompson'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Football',
    description: 'Gridiron Glory',
    author: 'Marcus Davis'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Tennis',
    description: 'Grand Slam Dreams',
    author: 'Sophie Anderson'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Soccer',
    description: 'Beautiful Game',
    author: 'Carlos Rodriguez'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Baseball',
    description: 'America\'s Pastime',
    author: 'Jake Wilson'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Hockey',
    description: 'Ice Warriors',
    author: 'Connor O\'Brien'
  }
]; 