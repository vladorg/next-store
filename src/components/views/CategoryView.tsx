import { ProductCard } from "../cards/ProductCard"


export const CategoryView = () => {

  return (
    <>
      <h1 className="text-3xl">Category</h1>
      <div className="grid grid-cols-5 gap-6 mt-8">
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
