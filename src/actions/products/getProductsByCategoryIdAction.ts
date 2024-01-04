import { DB_CONNECT } from "@/db"
import ProductsModel from '@/db/models/ProductsModel'
import { iProduct } from "@/types"
import { revalidatePath } from "next/cache";

export const getProductsByCategoryIdAction = async (
  id: string | undefined, showDisabled: boolean = false
): Promise<iProduct[] | undefined> => {
  try {
    if (!id) return

    await DB_CONNECT();      
    
    const filter = !showDisabled ? {'categoryId': id, status: true} : {'categoryId': id};
    const req = await ProductsModel.find(filter) as iProduct[];

    const products = JSON.parse(JSON.stringify(req)); 
    
    //revalidatePath('/admin/products');
    // TODO: move revalidator from here and make it universal
    
    return products
  } catch(err) {
    console.log(err);
  }
}
