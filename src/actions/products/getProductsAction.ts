'use server'

import { DB_CONNECT } from "@/db"
import ProductsModel from '@/db/models/ProductsModel'
import { iProduct } from "@/types"

export const getProductsAction = async (): Promise<iProduct[] | undefined> => {
  try {
    await DB_CONNECT();      

    const req = await ProductsModel.find() as iProduct[];

    const products = JSON.parse(JSON.stringify(req));    
    
    return products
  } catch(err) {
    console.log(err);
  }
}
