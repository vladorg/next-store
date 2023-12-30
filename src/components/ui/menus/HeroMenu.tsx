'use client';

import Link from "next/link";
import { IconArrowCircle } from "../icons/IconArrowCircle";
import { usePathname } from "next/navigation";

export interface iMenuItem {
  title: string,
  href: string,
  thumb?: string
}

export const HeroMenu = ({
  menus
}: {
  menus: iMenuItem[]
}) => {
  const path = usePathname();
  
  return (
    <nav className="overflow-auto rounded-md bg-[var(--primary-color)]">
      <ul role="list" className="">
        { menus.map(({title, href, thumb}, i) => (
          <li key={href} className="">
            <Link href={href} className={`flex items-center min-w-0 gap-x-4 p-2.5 ${path == href ? 'bg-[var(--hover-color)] pointer-events-none' : 'hover:bg-[var(--hover-color)]'}`}>

              { thumb ? (
                <img className="h-8 w-8 flex-none rounded-full object-cover" src={thumb} alt="" />
              ) : (
                <div className="h-8 w-8 rounded-full bg-[var(--hover-color)] flex justify-center items-center">
                  <IconArrowCircle />
                </div>
              )}
              
              <span>{title}</span>
            </Link>
          </li>
        ))}        
      </ul>
    </nav>
  )
}
