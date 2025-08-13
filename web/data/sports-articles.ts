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
        image: 'https://images.unsplash.com/photo-1495329356033-eb76e0af9fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNoYW1waW9uc2hpcCUyMHdvcmxkJTIwY3VwJTIwcXVhbGlmaWVyc3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'World Cup Qualifiers: Underdog Nations Rise',
        author: 'Written by: Carlos Rodriguez',
        colorPattern: 'orange'
      },
      {
        id: 2,
        sport: 'soccer',
        image: 'https://images.unsplash.com/photo-1486206137976-8a754c7b9cf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENoYW1waW9ucyUyMExlYWd1ZSUzQSUyMEV1cm9wZWFuJTIwR2lhbnRzJTIwQ2xhc2h8ZW58MHx8MHx8fDA%3D',
        title: 'Champions League: European Giants Clash',
        author: 'Written by: Maria Santos',
        colorPattern: 'orange'
      },
      {
        id: 3,
        sport: 'soccer',
        image: 'https://images.unsplash.com/photo-1556152353-ea415ccbf1c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxQcmVtaWVyJTIwTGVhZ3VlJTNBJTIwVGl0bGUlMjBSYWNlJTIwSGVhdHMlMjBVcHxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Premier League: Title Race Heats Up',
        author: 'Written by: James Wilson',
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
        image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Masters Tournament: Green Jacket Dreams',
        author: 'Written by: Tiger Woods',
        colorPattern: 'green'
      },
      {
        id: 5,
        sport: 'golf',
        image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'PGA Championship: Major Glory Awaits',
        author: 'Written by: Phil Mickelson',
        colorPattern: 'green'
      },
      {
        id: 6,
        sport: 'golf',
        image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Ryder Cup: Team Europe vs Team USA',
        author: 'Written by: Rory McIlroy',
        colorPattern: 'green'
      }
    ]
  }
]; 