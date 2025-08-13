export interface SportsArticle {
  id: number;
  sport: 'soccer' | 'golf';
  image: string;
  title: string;
  author: string;
  colorPattern: 'orange' | 'green';
}

export interface SportsSection {
  sport: 'soccer' | 'golf';
  title: string;
  color: 'orange' | 'green';
  articles: SportsArticle[];
}

export const sportsSections: SportsSection[] = [
  {
    sport: 'soccer',
    title: 'Soccer',
    color: 'orange',
    articles: [
      {
        id: 1,
        sport: 'soccer',
        image: '/images/soccer-1.jpg',
        title: 'Article name article name article name',
        author: 'Written by: Name',
        colorPattern: 'orange'
      },
      {
        id: 2,
        sport: 'soccer',
        image: '/images/soccer-2.jpg',
        title: 'Article name article name article name',
        author: 'Written by: Name',
        colorPattern: 'orange'
      },
      {
        id: 3,
        sport: 'soccer',
        image: '/images/soccer-3.jpg',
        title: 'Article name article name article name',
        author: 'Written by: Name',
        colorPattern: 'orange'
      }
    ]
  },
  {
    sport: 'golf',
    title: 'Golf',
    color: 'green',
    articles: [
      {
        id: 4,
        sport: 'golf',
        image: '/images/golf-1.jpg',
        title: 'Article name article name article name',
        author: 'Written by: Name',
        colorPattern: 'green'
      },
      {
        id: 5,
        sport: 'golf',
        image: '/images/golf-2.jpg',
        title: 'Article name article name article name',
        author: 'Written by: Name',
        colorPattern: 'green'
      },
      {
        id: 6,
        sport: 'golf',
        image: '/images/golf-3.jpg',
        title: 'Article name article name article name',
        author: 'Written by: Name',
        colorPattern: 'green'
      }
    ]
  }
]; 