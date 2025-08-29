import { HeroNavbar } from '../ui/hero-navbar'
import CategorySection from '../ui/category-section'

export function Header() {
  const list_of_links = [
    { link_label: 'NBA', link_path: '/' },
    { link_label: 'NFL', link_path: '/' },
    { link_label: 'MLB', link_path: '/' },
    { link_label: 'NHL', link_path: '/' },
    { link_label: 'Soccer', link_path: '/' },
    { link_label: 'Scribe', link_path: '/' },
    { link_label: 'Tennis', link_path: '/' },
    { link_label: 'Golf', link_path: '/' },
    { link_label: 'Cricket', link_path: '/' },
  ]

  return (
    <header>
      <HeroNavbar />

      {/** Yamine's component : To review*/}
      <CategorySection list_of_links={list_of_links} />
    </header>
  )
}
