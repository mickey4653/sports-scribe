export interface LatestArticle {
  id: number;
  image: string;
  title: string;
  description: string;
  author: string;
  colorPattern: 'brown' | 'green' | 'blue' | 'purple' | 'orange' | 'yellow';
}

export const latestArticles: LatestArticle[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1480099225005-2513c8947aec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYW1waW9uc2hpcCUyMHNob3dkb3dufGVufDB8fDB8fHww',
    title: 'Championship Showdown',
    description: 'The ultimate battle for supremacy in the ring',
    author: 'Mike Johnson',
    colorPattern: 'brown'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Rising Stars',
    description: 'Young athletes making their mark in sports history',
    author: 'Sarah Williams',
    colorPattern: 'green'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Legacy of Legends',
    description: 'Celebrating the greatest moments in sports',
    author: 'David Chen',
    colorPattern: 'blue'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Breaking Records',
    description: 'New milestones being set across all sports',
    author: 'Emma Rodriguez',
    colorPattern: 'purple'
  }
]; 