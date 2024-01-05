'use client'

import { useEffect, useState } from "react"
import { IconSearch } from "../icons/IconSearch"
import { getProductsByName } from "@/actions/products/getProductsByName";
import { useDebounce } from "@/hooks/useDebounce";
import { iProduct } from "@/types";
import Link from "next/link";
import { IconLoad } from "../icons/IconLoad";
import { useCategoryInfo } from "@/hooks/useCategoryInfo";
import { usePathname } from "next/navigation"

export const ProductsSearch = () => {
  const path = usePathname(); 
  const [value, setValue] = useState<string>('');
  const [products, setProducts] = useState<iProduct[] | null>(null);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const debouncedValue = useDebounce<string>(value, 500);  
  
  const changeHandler = (val: string) => {
    setValue(val);
    setProducts(null);

    if (val) {      
      setIsSearch(true)
    } else {
      setProducts(null)
      setIsSearch(false)
    }
  }  

  const disableSearch = () => {
    setValue('');
    setProducts(null);
    setIsSearch(false);
  }

  useEffect(() => {
    ( async () => {      
      let result = await getProductsByName(debouncedValue); 

      if (result) {
        result = await useCategoryInfo(result);
        setProducts(result);
      } else {
        setProducts(null);
      }

      setIsSearch(false);      
    } )()
  }, [debouncedValue]);  

  useEffect(() => disableSearch(), [path]);

  return (
    <div className="ml-auto w-[40%] flex relative">
      <input type="text" value={value} onChange={(e) => changeHandler(e.target.value)} className="w-full p-2 rounded-l-md outline-0 text-black" placeholder="Search..."/>
      <button className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-r-md">
        { isSearch ? (
          <span className="block animate-spin"><IconLoad /></span>
        ) : <IconSearch /> } 
      </button>
      
      { products ? (
        <ul className="absolute top-[110%] left-0 bg-white text-black p-3 w-full rounded-md z-10">
          { products.length ? (
            <>
              { products.map(({ title, _id, slug, category, thumb }, i) => (
                <li key={_id} className={`flex items-center ${i != products.length - 1 ? 'mb-2' : ''}`}>
                  <div className="w-12 h-12">
                    <img className="h-full object-cover" src={thumb} alt="img product" />
                  </div>
                  <Link href={`/${category?.slug}/${slug}`} className="underline ml-2 font-medium">{title}</Link>
                </li>
              )) }
            </>
          ) : (
            <li>Products is not found!</li>
          ) }
        </ul>  
      ) : null }          
    </div>
  )
}
