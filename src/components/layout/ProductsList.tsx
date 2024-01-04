import { iProduct } from "@/types"
import { ProductCard } from "../cards/ProductCard"

export const ProductsList = ({ title, products }: { title: string, products?: iProduct[] }) => (
  <>
    { products?.length ? (
      <section>
        <div className="mt-16">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="grid grid-cols-5 gap-6 mt-4">
          { products.map((product) => {
            product.slug = `/${product.category?.slug}/${product.slug}`;

            return <ProductCard key={product._id} data={product} />
          }) }
        </div>
      </section>
    ) : null }
  </>
)
