'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/hooks/useAppSelector"
import toast from "react-hot-toast"
import { usePathname } from "next/navigation"
import { IconLoad } from "../icons/IconLoad"
import { CartProducts } from "./CartProducts"

export const Cart = ({ children, className = '' }: { children: React.ReactNode, className: string }) => {
  const { loadCart, deleteProductFromCart } = useActions();
  const { products, error, loading } = useAppSelector(state => state.cart);  
  const path = usePathname(); 
  const [open, setOpen] = useState<boolean>(false);

  const totalPrice = products.length ? products.reduce((t, { price, quantity }) => t ? t + (+price * (quantity || 1)) : +price * (quantity || 1), 0) : 0; 
  
  const cartClassNames = `${className} ${open ? 'bg-[var(--hover-color)]' : 'hover:bg-[var(--hover-color)]'}`
  const cartLoadingClassNames = loading ? 'animate-spin pointer-events-none' : '';
  const controlsClassNames = 'bg-[var(--secondary-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-md inline-flex items-center';

  const forceLoadCart = async () => {
    setOpen(false);
    await loadCart()
  }

  const deleteHandler = async (id: string) => {
    const del: any = await deleteProductFromCart(id);

    if (del.error) toast.error('Failed remove from cart!') 
  }

  useEffect(() => { loadCart() }, [])
  useEffect(() => setOpen(false), [path]) // close cart when route was changed 

  return (
    <>
      <button disabled={loading} className={`${cartClassNames} ${cartLoadingClassNames}`} onClick={() => setOpen(!open)}>
        { loading ? <IconLoad /> : children }
        { products.length || error ? (
          <span className="absolute top-[-3px] right-[-3px] text-sm bg-[var(--red-color)] rounded-full w-4 h-4 flex justify-center items-center">
            {products.length || '!'}
          </span>
        ) : null }
        
      </button>

      { open ? (
        <div className="absolute top-[56px] right-0 z-10">
          <div className="min-w-[350px] bg-[var(--primary-color)] rounded-b-md">

            { !error ? (
              <CartProducts 
                products={products} 
                onDelete={(id: string) => deleteHandler(id)} 
              />
            ) : <div className="p-4 text-[var(--red-color)]">Error in load cart!</div>}

            <div className="p-4 justify-between flex">

              <button onClick={() => setOpen(false)} className={controlsClassNames}>Close</button>
              { error ? <button onClick={() => forceLoadCart()} className={controlsClassNames}>Try again</button> : null}
              
              { products.length && !error ? (
                <Link 
                  href="/checkout" 
                  className="bg-[var(--darkGreen-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-md inline-flex items-center ml-auto"
                >
                  Checkout ${totalPrice}
                </Link> 
              ) : null }                           
            </div>
          </div>
        </div>
      ) : null }      
    </>
  )
}
