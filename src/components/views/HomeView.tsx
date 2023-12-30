import { ProductCard } from "../cards/ProductCard"
import { HeroHome } from "../hero/HeroHome"


export const HomeView = () => {

  return (
    <>
      <HeroHome />
      <div className="mt-16">
        <h2 className="text-2xl font-bold">Featured products</h2>
      </div>
      <div>
        <img src="/static/defaults/product.png" alt="" />
      </div>
      <div className="grid grid-cols-5 gap-6 mt-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}
