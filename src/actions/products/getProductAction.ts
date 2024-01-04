'use server'

import { DB_CONNECT } from "@/db"
import ProductsModel from '@/db/models/ProductsModel'
import { iProduct } from "@/types"

export const getProductAction = async (id: string, showDisabled: boolean = false): Promise<iProduct | undefined> => {
  try {
    await DB_CONNECT();      

    const req = await ProductsModel.findById(id) as iProduct;

    if (!req.status && !showDisabled) return   

    const product = JSON.parse(JSON.stringify(req));    
    
    return product
  } catch(err) {
    console.log(err);
  }
}
