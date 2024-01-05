import { iCategory, iProduct } from "@/types"
import { HeroHome } from "../hero/HeroHome"
import { ProductsList } from "../layout/ProductsList"
import { SpecialCard } from "../cards/SpecialCard"

export const HomeView = ({ 
  data: { products, categories } 
}: { 
  data: { products?: iProduct[], categories?: iCategory[] }  
}) => {  

  const special1 = {
    title: 'Product 1',
    price: 200,
    thumb: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    direction: 'right'
  }

  const special2 = {
    title: 'Product 2',
    price: 300,
    thumb: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    direction: 'left'
  }

  return (
    <>
      <HeroHome categories={categories} />
      <ProductsList title="Latest products" products={products} />

      <section>
        <div className="mt-16">
          <h2 className="text-2xl font-bold">Special offers</h2>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-6">
          <SpecialCard data={special1} />
          <SpecialCard data={special2} />
        </div>
      </section>  

      <ProductsList title="Bestsellers" products={products} />   

      <section className="pb-16">
        <div className="mt-16">
          <h2 className="text-2xl font-bold">About us</h2>
        </div>
        <div className="mt-4 border-t pt-4">
          <h3 className="font-bold">Welcome to our store! :)</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sunt. Omnis quam animi labore vitae. Praesentium quos blanditiis mollitia nostrum cum ea sequi quae nihil sit minus aut deleniti, vero repudiandae dolor maiores fugiat recusandae veniam quod! Omnis excepturi sequi praesentium id nobis eaque rem ipsa dignissimos temporibus, debitis eius!</p>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat quod molestiae deleniti ullam ut dicta dignissimos optio totam inventore dolore repellendus nemo ipsam debitis nulla porro, voluptates nisi ducimus earum pariatur sit eveniet accusantium necessitatibus dolorem? Sequi repellat perspiciatis qui magnam iusto excepturi accusamus corporis quidem eaque. Optio ab obcaecati nemo, numquam corporis, asperiores beatae explicabo, omnis rerum enim quisquam consequuntur. Ab consectetur assumenda voluptate perferendis, tenetur incidunt vitae illo ad qui quas repellendus iure molestias possimus beatae itaque natus veniam. Impedit optio, eum aspernatur tempore magni, quas molestiae incidunt laudantium ipsam ea consectetur odit reprehenderit exercitationem laboriosam culpa?</p>
        </div>
      </section> 
    </>
  )
}
