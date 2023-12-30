
import { ProductCard } from "../cards/ProductCard";
import { Tabs } from "../ui/Tabs";
import { HeroProduct } from "../hero/HeroProduct";

export const ProductView = () => {
  const tabControls = ['About', 'Chars', 'Reviews'];
  const tabContent = ['About', 'Chars', 'Reviews'];

  return (
    <>
      <div className="container mx-auto mt-20">
        <HeroProduct />

        <Tabs controls={tabControls} content={tabContent} className="mt-10" />

        <div className="mt-16">
          <h2 className="text-2xl font-bold">Featured products</h2>
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
    </div>
    </>
  )
}
