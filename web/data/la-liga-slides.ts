export interface LaLigaSlide {
  id: number;
  image: string;
  title: string;
  date: string;
  teams: string;
  category: string;
}

export const laLigaSlides: LaLigaSlide[] = [
  {
    id: 1,
    image: "/images/la-liga/real-madrid-vs-barcelona.jpg",
    title: "El Clásico: Real Madrid vs Barcelona",
    date: "2024-01-15",
    teams: "Real Madrid vs Barcelona",
    category: "Soccer"
  },
  {
    id: 2,
    image: "/images/la-liga/atletico-madrid-vs-sevilla.jpg",
    title: "Atletico Madrid Secures Victory",
    date: "2024-01-14",
    teams: "Atletico Madrid vs Sevilla",
    category: "Soccer"
  },
  {
    id: 3,
    image: "/images/la-liga/villarreal-vs-valencia.jpg",
    title: "Villarreal's Comeback Win",
    date: "2024-01-13",
    teams: "Villarreal vs Valencia",
    category: "Highlights"
  },
  {
    id: 4,
    image: "/images/la-liga/real-sociedad-vs-betis.jpg",
    title: "Real Sociedad Dominates",
    date: "2024-01-12",
    teams: "Real Sociedad vs Real Betis",
    category: "Soccer"
  }
];
