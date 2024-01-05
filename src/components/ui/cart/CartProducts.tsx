import { iProduct } from "@/types";
import Link from "next/link";
import { IconTrash } from "../icons/IconTrash";

export const CartProducts = ({ 
  products, 
  onDelete 
}: { 
  products: iProduct[], 
  onDelete: Function 
}) => (
  products.length ? ( products.map(({ title, price, _id, thumb, quantity, category, slug }, i) => {
    const link = `/${category?.slug}/${slug}`;
    return (
      <div key={i} className="p-4 flex items-center cursor-pointer border-b border-gray-100">
        <div className="w-12 h-12">
          <img className="h-full object-cover" src={thumb} alt="img product" />
        </div>
        <div className="text-sm ml-2">
          <Link href={link} className="font-bold text-md hover:underline">{title}</Link>
          <div className="mt-2">
            <span>Quantity: {quantity || 1}</span>
            <span className="underline font-bold inline-block ml-2">Total: {+price * (quantity || 1)}$</span>
          </div>
        </div>
        <div className="text-sm ml-auto">
          <button onClick={() => onDelete(_id)} className="rounded-full cursor-pointer text-red-500 p-2">
            <IconTrash />
          </button>
        </div>
      </div>
    )
  })) : <div className="p-4">Your cart is empty...</div>
)
