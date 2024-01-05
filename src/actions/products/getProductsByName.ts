'use server'

import { DB_CONNECT } from "@/db"
import ProductsModel from '@/db/models/ProductsModel'
import { iProduct } from "@/types"

export const getProductsByName = async (
  name: string | undefined, showDisabled: boolean = false
): Promise<iProduct[] | undefined> => {
  try {
    if (!name) return

    await DB_CONNECT();    
    
    const filter = !showDisabled ? {'title': new RegExp(name, 'i'), status: true} : {'title': new RegExp(name, 'i')};
    const req = await ProductsModel.find(filter) as iProduct[];

    const products = JSON.parse(JSON.stringify(req)); 
    
    return products
  } catch(err) {
    console.log(err);
  }
}
