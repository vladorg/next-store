'use server'

import { DB_CONNECT } from "@/db"
import ProductsModel from '@/db/models/ProductsModel'
import { iProduct } from "@/types"
import { revalidatePath } from "next/cache";

export const getProductsAction = async (showDisabled: boolean = false): Promise<iProduct[] | undefined> => {
  try {
    await DB_CONNECT();      
    const filter = !showDisabled ? { status: true } : {};

    const req = await ProductsModel.find(filter) as iProduct[];

    const products = JSON.parse(JSON.stringify(req)); 
    
    // revalidatePath('/', 'layout');
    
    return products
  } catch(err) {
    console.log(err);
  }
}
