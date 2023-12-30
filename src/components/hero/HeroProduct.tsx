'use client'

import { useState } from "react";
import { Count } from "../ui/Count"
import { IconBuy } from "../ui/icons/IconBuy"

export const HeroProduct = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <div className="md:flex md:items-center">
      <div className="w-full h-64 md:w-1/2 lg:h-96">
          <img className="h-full w-full rounded-md object-cover max-w-lg" src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Nike Air" />
      </div>
      <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
          <h1 className="text-3xl">Nike Air</h1>
          <span className="mt-4 text-xl inline-block">$125</span>

          <div className="mt-16 pt-2 border-t">
            <Count 
              value={count} 
              maxValue={3}
              onChange={(newVal: number) => setCount(newVal)}
            />

            <div className="flex items-center mt-6">
              <button className="px-8 py-2 bg-[var(--primary-color)] text-sm font-medium rounded-md hover:bg-[var(--hover-color)] flex items-center">
                <IconBuy />
                <span className="inline-block ml-2">Add to cart</span>
              </button>
            </div>
          </div>
      </div>
  </div>
  )
}
