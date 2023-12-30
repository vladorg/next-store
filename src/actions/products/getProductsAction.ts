import { DB_CONNECT } from "@/db"
import ProductsModel from '@/db/models/ProductsModel'
import { iProduct } from "@/types"
import { revalidatePath } from "next/cache";

export const getProductsAction = async (): Promise<iProduct[] | undefined> => {
  try {
    await DB_CONNECT();      

    const req = await ProductsModel.find() as iProduct[];

    const products = JSON.parse(JSON.stringify(req)); 
    
    revalidatePath('/admin/products');
    
    return products
  } catch(err) {
    console.log(err);
  }
}
