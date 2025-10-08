import { HeroNavbar } from '../ui/hero-navbar'
import CategorySection from '../ui/category-section'

export function Header() {
  const list_of_links = [
    { link_label: 'NBA', link_path: '/sports/nba' },
    { link_label: 'NFL', link_path: '/sports/nfl' },
    { link_label: 'MLB', link_path: '/sports/mlb' },
    { link_label: 'NHL', link_path: '/sports/nhl' },
    { link_label: 'Soccer', link_path: '/sports/soccer' },
    { link_label: 'Scribe', link_path: '/sports/scribe' },
    { link_label: 'Tennis', link_path: '/sports/tennis' },
    { link_label: 'Golf', link_path: '/sports/golf' },
    { link_label: 'Cricket', link_path: '/sports/cricket' },
  ]

  return (
    <header>
      <HeroNavbar />
      <CategorySection list_of_links={list_of_links} />
    </header>
  )
}
