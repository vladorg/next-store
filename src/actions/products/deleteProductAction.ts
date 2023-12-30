'use server'

import { DB_CONNECT } from "@/db";
import ProductsModel from "@/db/models/ProductsModel";
import { iProduct } from "@/types";
import { revalidatePath } from "next/cache";


export const deleteProductAction = async (id: string | undefined): Promise<iProduct | undefined> => {
  try {
    if (!id) return

    await DB_CONNECT();

    const req = await ProductsModel.findByIdAndDelete(id);

    const deletedProduct = JSON.parse(JSON.stringify(req));    

    revalidatePath('/admin/products');

    return deletedProduct
  } catch(err) {
    console.log(err);    
  }


}
