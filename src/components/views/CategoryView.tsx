import { iCategory, iProduct } from "@/types"
import { ProductCard } from "../cards/ProductCard"

export const CategoryView = ({ 
  data: { category, products } 
}: {
  data: { category: iCategory, products: iProduct[] | undefined } 
}) => {
  const { title, description, thumb, slug: categorySlug } = category;

  return (
    <>
      <div className="flex items-center">
        <div className="mr-2">
          <img className="w-[100px] h-[100px] object-cover" src={thumb} alt="" />
        </div>
        <h1 className="text-3xl">{title}</h1>        
      </div>
      <div className="mt-6">{description}</div>
      <div className="grid grid-cols-5 gap-6 mt-8 border-t border-[var(--primary-color)] pt-6">
        { products?.length ? (          
           products.map(product => {
            product.slug = `/${categorySlug}/${product.slug}`;

            return <ProductCard key={product._id} data={product} />
           })          
        ) : 'No products...' }
      </div>      
    </>
  )
}
