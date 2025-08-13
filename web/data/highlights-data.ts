export interface HighlightArticle {
  id: string;
  title: string;
  author: string;
  sport: string;
  featuredImage: string;
  excerpt: string;
}

export const highlightsArticles: HighlightArticle[] = [
  {
    id: "1",
    title: "Serena Williams Makes Historic Return to Wimbledon",
    author: "Emma Thompson",
    sport: "Tennis",
    featuredImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "The tennis legend returns to the hallowed courts of Wimbledon for one final championship run..."
  },
  {
    id: "2",
    title: "NBA Finals: Lakers vs Celtics Rivalry Renewed",
    author: "Michael Johnson",
    sport: "Basketball",
    featuredImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "The most storied rivalry in basketball history takes center stage once again..."
  },
  {
    id: "3",
    title: "World Cup Qualifiers: Underdog Nations Rise",
    author: "Carlos Rodriguez",
    sport: "Soccer",
    featuredImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "Surprising results shake up the road to the 2026 World Cup..."
  },
  {
    id: "4",
    title: "Olympic Swimming: New World Records Set in Paris",
    author: "Sarah Chen",
    sport: "Swimming",
    featuredImage: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "Athletes break multiple world records in the Olympic swimming pool, setting new standards for the sport..."
  }
]; 