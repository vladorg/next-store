import { iCategory, iProduct } from "@/types"
import { HeroHome } from "../hero/HeroHome"
import { ProductsList } from "../layout/ProductsList"

export const HomeView = ({ 
  data: { products, categories } 
}: { 
  data: { products?: iProduct[], categories?: iCategory[] }  
}) => {  

  return (
    <>
      <HeroHome categories={categories} />
      <ProductsList title="Latest products" products={products} />
    </>
  )
}
