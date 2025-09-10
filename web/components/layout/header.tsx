import { HeroNavbar } from '../ui/hero-navbar'
import CategorySection from '../ui/category-section'

export function Header() {
  const list_of_links = [
    { link_label: 'NBA', link_path: '/sports/basketball' },
    { link_label: 'NFL', link_path: '/sports/football' },
    { link_label: 'MLB', link_path: '/sports/baseball' },
    { link_label: 'NHL', link_path: '/sports/hockey' },
    { link_label: 'Soccer', link_path: '/sports/soccer' },
    { link_label: 'Scribe', link_path: '/' },
    { link_label: 'Tennis', link_path: '/sports/tennis' },
    { link_label: 'Golf', link_path: '/sports/golf' },
    { link_label: 'Cricket', link_path: '/sports/cricket' },
  ]

  return (
    <header>
      <HeroNavbar />

      {/** Yamine's component : To review*/}
      <CategorySection list_of_links={list_of_links} />
    </header>
  )
}
