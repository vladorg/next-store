'use client';

import Link from "next/link";
import { IconArrowCircle } from "../icons/IconArrowCircle";
import { usePathname } from "next/navigation";
import { iMenu } from "@/types";

export const MainMenu = ({ menus }: { menus?: iMenu[] }) => {
  const path = usePathname();  
  
  return (
    <>
      { menus ? (
        <nav className="overflow-auto rounded-md bg-[var(--primary-color)]">
          <ul role="list" className="">
            { menus.map(({ title, slug, thumb }) => {
              const path_details = path.split('/');
              let isCurrent = false;

              if (path_details[2]) {
                isCurrent = slug.includes(path_details[2]);
              } else {
                isCurrent = slug == '/admin';                
              }

              return (
                <li key={slug} data-test0={slug} data-test={slug.includes(path_details[2])} className="">
                  <Link href={slug} className={`flex items-center min-w-0 gap-x-4 p-2.5 ${isCurrent ? 'bg-[var(--hover-color)]' : 'hover:bg-[var(--hover-color)]'}`}>

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
              )
            })}        
          </ul>
        </nav>
      ) : null}
    </>    
  )
}
