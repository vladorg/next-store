'use client'

import Link from "next/link"
import { IconBuy } from "../ui/icons/IconBuy"
import { IconHeart } from "../ui/icons/IconHeart"
import { iProduct } from "@/types"
import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/hooks/useAppSelector"
import toast from "react-hot-toast"

export const ProductCard = ({ data }: { data: iProduct }) => {
  const { title, thumb, price, slug, _id } = data;
  const buttonClassNames = 'absolute z-10 right-2 top-2 rounded-full p-2 cursor-pointer group'; 
  const { addProductToCart } = useActions();
  const { products } = useAppSelector(state => state.cart);  
  const inCart = !!products.filter(({ _id: productCartId }) => _id == productCartId ).length;  

  const addToCartHandler = async (id: string) => {
    const add: any = await addProductToCart({ id });

    if (add.error) {
      toast.error('Failed add to cart!')     
    } else {
      toast.success(`Add ${title} in cart success!`)
    }
  }

  return (
    <div className="relative bg-[var(--primary-color)] shadow-md rounded-3xl p-2">
      <div className="overflow-x-hidden rounded-2xl relative">
        <img className="h-40 rounded-2xl w-full object-cover" src={thumb} />
        <button 
          disabled={inCart} 
          onClick={() => addToCartHandler(_id as string)} 
          className={`${buttonClassNames} ${inCart ? 'bg-[var(--darkGreen-color)]' : 'bg-[var(--primary-color)] hover:bg-[var(--hover-color)]'}`}
        >
          <IconBuy />
        </button>
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
