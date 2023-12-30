import { HeroMenu } from "../ui/menus/HeroMenu"
import { HeroBanner } from "./HeroBanner"


export const HeroHome = () => {
  const thumb = 'https://images.unsplash.com/photo-1569183091671-696402586b9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const menus = [
    { title: "Phones", href: "phones", thumb }, 
    { title: "Laptops", href: "laptops", thumb }, 
    { title: "Computers", href: "computers", thumb }, 
    { title: "Music", href: "music", thumb }, 
    { title: "Cameras", href: "cameras", thumb }, 
    { title: "Accessories", href: "accessories", thumb },
    { title: "Keyboards", href: "keyboards", thumb },
    { title: "Tablets", href: "tablets", thumb },
  ];

  return (
    <section>
      <div className="container grid grid-cols-4 gap-x-6 h-[410px]">
        <HeroMenu menus={menus} />
        <HeroBanner />
      </div>
    </section>
  )
}
