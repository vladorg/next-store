'use client'

import { useState } from "react";
import { Count } from "../ui/Count"
import { IconBuy } from "../ui/icons/IconBuy"
import { iProduct } from "@/types";
import { useActions } from "@/hooks/useActions";
import toast from "react-hot-toast";
import { useAppSelector } from "@/hooks/useAppSelector";
import { BabyLoader } from "../ui/loaders/BabyLoader";
import { IconLoad } from "../ui/icons/IconLoad";

export const HeroProduct = ({ data }: { data: iProduct }) => {
  const { products, error, loading: cartLoading } = useAppSelector(state => state.cart);
  const [loading, setLoading] = useState<boolean>(false);
  const { addProductToCart } = useActions();
  const [counter, setCounter] = useState<number>(1);

  const { title, thumb, price, count, _id, category } = data;
  const inCart = !!products.filter(({ _id: productCartId }) => _id == productCartId ).length;

  const buttonClassNames = 'px-8 py-2 text-sm font-medium rounded-md flex items-center';
  const buttonActiveClassNames = inCart ? 'bg-[var(--darkGreen-color)]' : 'bg-[var(--primary-color)] hover:bg-[var(--hover-color)]';
  const buttonLoadClassNames = loading ? 'animate-spin' : ''; 

  const addToCartHandler = async (id: string) => {
    setLoading(true);

    const add: any = await addProductToCart({ id, quantity: counter });

    if (add.error) {
      toast.error('Failed add to cart!')     
    } else {
      toast.success(`Add ${title} in cart success!`)
    }

    setLoading(false);
  }

  return (
    <div className="md:flex md:items-center">
      <div className="w-full h-64 md:w-1/2 lg:h-96">
        <img className="h-full w-full rounded-md object-cover max-w-lg" src={thumb} alt="Nike Air" />
      </div>
      <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
          <h1 className="text-3xl underline">{title}</h1>
          <div className="mt-4 text-xl text-[var(--green-color)]">${price}</div>
          <div className="mt-4 text-lg">{category?.title}</div>
          { !error ? (
            <>
              { !cartLoading ? (
                <div className="mt-16 pt-2 border-t">
                  <Count 
                    value={counter} 
                    maxValue={count}
                    onChange={(newVal: number) => setCounter(newVal)}
                  />

                  <div className="flex items-center mt-6">
                    <button 
                      disabled={inCart || loading ? true : false}
                      onClick={() => addToCartHandler(_id as string)} 
                      className={`${buttonClassNames} ${buttonActiveClassNames} ${loading ? 'pointer-events-none' : ''}`}
                    >
                      { loading ? (
                        <div className={buttonLoadClassNames}><IconLoad /></div>
                      ) : <IconBuy /> }

                      <span className="inline-block ml-2">
                        { loading ? 'Loading...' : inCart ? 'In cart' : 'Add to cart' }
                      </span>
                    </button>
                  </div>
                </div>
              ) : <div className="mt-16 pt-2 border-t"><BabyLoader /></div> }              
            </>
          ) : (
            <div className="mt-16 pt-2 border-t text-[var(--red-color)]">
              Error in load cart!
            </div>
          ) }          
      </div>
  </div>
  )
}
