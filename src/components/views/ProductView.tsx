import { Tabs } from "../ui/Tabs";
import { HeroProduct } from "../hero/HeroProduct";
import { iProduct } from "@/types";
import { ProductsList } from "../layout/ProductsList";

export const ProductView = ({ 
  data: { currentProduct, products } 
}: {
  data: { currentProduct: iProduct, products: iProduct[] } 
}) => {
  const { description, chars } = currentProduct;

  const tabControls = ['About', 'Chars', 'Reviews'];
  const tabContent = [description, chars, 'Reviews'];    

  return (
    <>
      <div className="container mx-auto mt-20">
        <HeroProduct data={currentProduct} />
        <Tabs controls={tabControls} content={tabContent} className="mt-10" />
        <ProductsList title="Latest products" products={products} />
    </div>
    </>
  )
}
