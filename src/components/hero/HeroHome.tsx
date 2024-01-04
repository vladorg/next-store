import { MainMenu } from "../ui/menus/MainMenu"
import { HeroBanner } from "./HeroBanner"
import { iCategory } from "@/types";

export const HeroHome = ({ categories }: { categories?: iCategory[] }) => {

  return (
    <section>
      <div className="container grid grid-cols-4 gap-x-6 h-[410px]">
        <MainMenu menus={categories} />
        <HeroBanner />
      </div>
    </section>
  )
}
