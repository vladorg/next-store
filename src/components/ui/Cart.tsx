'use client'

import Link from "next/link"
import { IconTrash } from "./icons/IconTrash"
import { useEffect, useState } from "react"
import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/hooks/useAppSelector"
import toast from "react-hot-toast"
import { usePathname } from "next/navigation"

export const Cart = ({ children, className = '' }: { children: React.ReactNode, className: string }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const classNames = `${className} ${open ? 'bg-[var(--hover-color)]' : 'hover:bg-[var(--hover-color)]'}`;
  const { loadCart, deleteProductFromCart } = useActions();
  const { products, error } = useAppSelector(state => state.cart);  
  const path = usePathname(); 
  const totalPrice = products.length ? products.reduce((t, { price, quantity }) => t ? t + (+price * (quantity || 1)) : +price * (quantity || 1), 0) : 0;   

  const deleteHandler = async (id: string) => {
    const del: any = await deleteProductFromCart(id);

    if (del.error) toast.error('Failed remove from cart!') 
  }

  useEffect(() => {
    ( async () => {
      const load: any = await loadCart();

      if (load.error) toast.error('Failed load cart!')

      setLoading(false); 
    })()
  }, []);

  useEffect(() => setOpen(false), [path]) // close cart when route was changed

  return (
    <>
      <button disabled={loading} className={classNames} onClick={() => setOpen(!open)}>
        {children}
        { products.length ? (
          <span className="absolute top-[-3px] right-[-3px] text-sm bg-[var(--red-color)] rounded-full w-4 h-4 flex justify-center items-center">
            {products.length}
          </span>
        ) : null }
        
      </button>

      { open ? (
        <div className="absolute top-[56px] right-0 z-10">
          <div className="min-w-[350px] bg-[var(--primary-color)] rounded-b-md">
            { !error ? (
              <>
                { products.length ? ( products.map(({title, price, _id, thumb, quantity}, i) => (
                  <div key={i} className="p-4 flex items-center cursor-pointer border-b border-gray-100">
                    <div className="w-12 h-12">
                      <img className="h-full object-cover" src={thumb} alt="img product" />
                    </div>
                    <div className="text-sm ml-2">
                      <Link href="#" className="font-bold text-md hover:underline">{title}</Link>
                      <div className="mt-2">
                        <span>Quantly: {quantity || 1}</span>
                        <span className="underline font-bold inline-block ml-2">Total: {+price * (quantity || 1)}$</span>
                      </div>
                    </div>
                    <div className="text-sm ml-auto">
                      <button onClick={() => deleteHandler(_id as string)} className="rounded-full cursor-pointer text-red-500 p-2">
                        <IconTrash />
                      </button>
                    </div>
                  </div>
                ))) : (
                  <div className="p-4">Your cart is empty...</div>
                )}
              </>
            ) : <div className="p-4">Error in load cart!</div>}

            <div className="p-4 justify-between flex">
              <button onClick={() => setOpen(false)} className="bg-[var(--secondary-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-md inline-flex items-center">Close</button>
              { products.length ? (
                <Link href="/checkout" className="bg-[var(--darkGreen-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-md inline-flex items-center ml-auto">Checkout ${totalPrice}</Link> 
              ) : null }                           
            </div>
          </div>
        </div>
      ) : null }
      
    </>
  )
}
