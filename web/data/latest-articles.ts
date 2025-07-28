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
    image: '/images/latest-1.jpg',
    title: 'Championship Showdown',
    description: 'The ultimate battle for supremacy in the ring',
    author: 'Mike Johnson',
    colorPattern: 'brown'
  },
  {
    id: 2,
    image: '/images/latest-2.jpg',
    title: 'Rising Stars',
    description: 'Young athletes making their mark in sports history',
    author: 'Sarah Williams',
    colorPattern: 'green'
  },
  {
    id: 3,
    image: '/images/latest-3.jpg',
    title: 'Legacy of Legends',
    description: 'Celebrating the greatest moments in sports',
    author: 'David Chen',
    colorPattern: 'blue'
  },
  {
    id: 4,
    image: '/images/latest-4.jpg',
    title: 'Breaking Records',
    description: 'New milestones being set across all sports',
    author: 'Emma Rodriguez',
    colorPattern: 'purple'
  }
]; 