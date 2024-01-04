'use client'

import Link from "next/link"
import { IconBuy } from "../ui/icons/IconBuy"
import { IconHeart } from "../ui/icons/IconHeart"
import { iProduct } from "@/types"
import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/hooks/useAppSelector"
import toast from "react-hot-toast"
import { IconLoad } from "../ui/icons/IconLoad"
import { useState } from "react"

export const ProductCard = ({ data }: { data: iProduct }) => {
  const { addProductToCart } = useActions();
  const { products, loading: cartLoading, error } = useAppSelector(state => state.cart); 
  const [loading, setLoading] = useState<boolean>(false);

  const { title, thumb, price, slug, _id } = data;
  const inCart = !!products.filter(({ _id: productCartId }) => _id == productCartId ).length; 

  const buttonClassNames = `absolute z-10 right-2 top-2 rounded-full p-2 cursor-pointer group`
  const buttonActiveClassNames = inCart ? 'bg-[var(--darkGreen-color)]' : 'bg-[var(--primary-color)] hover:bg-[var(--hover-color)]';
  const buttonLoadClassNames = loading || cartLoading ? 'animate-spin pointer-events-none' : ''; 

  const addToCartHandler = async (id: string) => {
    setLoading(true);

    const add: any = await addProductToCart({ id });

    if (add.error) {
      toast.error('Failed add to cart!')     
    } else {
      toast.success(`Add ${title} in cart success!`)
    }
    
    setLoading(false)
  }

  return (
    <div className="relative bg-[var(--primary-color)] shadow-md rounded-3xl p-2">
      <div className="overflow-x-hidden rounded-2xl relative">
        <img className="h-40 rounded-2xl w-full object-cover" src={thumb} />
        { !error ? (
          <button 
            disabled={inCart || loading || error ? true : false}
            onClick={() => addToCartHandler(_id as string)} 
            className={`${buttonClassNames} ${buttonActiveClassNames} ${buttonLoadClassNames}`}
          >
            { loading || cartLoading ? <IconLoad /> : <IconBuy /> }
          </button>
        ) : null }        
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between items-center">
        <div>
          <Link href={slug} className="text-lg font-semibold mb-0 hover:underline absolute top-0 left-0 w-full h-full"></Link>
          <p>{title}</p>
          <p className="text-md mt-0">${price}</p>
        </div>
        <div className="group cursor-pointer rounded-full p-2 hover:bg-[var(--hover-color)]">
          <IconHeart />
        </div>
      </div>
    </div>
  )
}
