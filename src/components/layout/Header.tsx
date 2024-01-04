import Link from "next/link"
import { IconCart } from "../ui/icons/IconCart"
import { IconHeart } from "../ui/icons/IconHeart"
import { IconPiece } from "../ui/icons/IconPiece"
import { IconSearch } from "../ui/icons/IconSearch"
import { IconUser } from "../ui/icons/IconUser"
import { IconSettings } from "../ui/icons/IconSettings"
import { Cart } from "../ui/Cart"


export const Header = () => {
  
  return (
    <header className="border-b border-[var(--primary-color)] py-4">
      <div className="container mx-auto flex items-center">
        <Link className="flex items-center hover:text-[var(--hover-color)]" href="/">
          <IconPiece />
          <span className="inline-block ml-1">My store</span>
        </Link>
        <div className="ml-auto w-[40%] flex">
          <input type="text" className="w-full p-2 rounded-l-md outline-0 text-black" placeholder="Search..."/>
          <button className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-r-md">
            <IconSearch />
          </button>
        </div>
        <div className="ml-auto flex relative">
          <Link href="/admin" className="mr-8 hover:bg-[var(--hover-color)] rounded-full p-2">
            <IconSettings />
          </Link>
          <Link href="/wishlist" className="mr-8 hover:bg-[var(--hover-color)] rounded-full p-2">
            <IconHeart />
          </Link>
          <Link href="/account" className="mr-8 hover:bg-[var(--hover-color)] rounded-full p-2">
            <IconUser />
          </Link>
          
          <Cart className="relative rounded-full p-2">
            <IconCart />
          </Cart>
        </div>
      </div>
    </header>
  )
}
