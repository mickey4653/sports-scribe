import { HeroNavbar } from "../ui/hero-navbar";
import CategorySection from "../ui/category-section";


export function Header() {

  const list_of_links = [

      {link_label : 'Home', link_path : '/' } ,
      {link_label : 'Sport', link_path : '/' } ,
      {link_label : 'Scribe', link_path : '/' } ,
      {link_label : 'Scribe', link_path : '/' } ,
      {link_label : 'Scribe', link_path : '/' } ,
      {link_label : 'Scribe', link_path : '/' } ,
      {link_label : 'Scribe', link_path : '/' } ,
      {link_label : 'Scribe', link_path : '/' } ,
      {link_label : 'Scribe', link_path : '/' } ,


  ];

  return (
    <header>
      <HeroNavbar />

      {/** Yamine's component : To review*/}
      <CategorySection list_of_links={list_of_links} />
    </header>
  );
}
