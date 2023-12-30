import Link from "next/link"
import { IconBuy } from "../ui/icons/IconBuy"
import { IconHeart } from "../ui/icons/IconHeart"


export const ProductCard = () => {

  return (
    <div className="relative bg-[var(--primary-color)] shadow-md rounded-3xl p-2">
      <div className="overflow-x-hidden rounded-2xl relative">
        <img className="h-40 rounded-2xl w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
        <div className="absolute right-2 top-2 bg-[var(--primary-color)] hover:bg-[var(--hover-color)] rounded-full p-2 cursor-pointer group">
          <IconBuy />
        </div>
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between items-center">
        <div>
          <Link href="/category/product" className="text-lg font-semibold mb-0 hover:underline">
            Product Name
          </Link>
          <p className="text-md mt-0">$340</p>
        </div>
        <div className="group cursor-pointer rounded-full p-2 hover:bg-[var(--hover-color)]">
          <IconHeart />
        </div>
      </div>
    </div>
  )
}
