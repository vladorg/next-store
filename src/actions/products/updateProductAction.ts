'use server'

import { DB_CONNECT } from "@/db";
import ProductsModel from "@/db/models/ProductsModel";
import { thumbGeneratePathService, thumbSaveService } from "@/services/thumbService";
import { iProduct } from "@/types";
import { revalidatePath } from "next/cache";


export const updateProductAction = async (id: string | undefined, data: any): Promise<iProduct | undefined> => {
  try {
    if (!id) return

    await DB_CONNECT();

    const { title, description, chars, categoryId, thumb, price, count, status, slug } = Object.fromEntries(data) as any;
    let thumbName = '';
    let thumbPath = '';

    const candidate = await ProductsModel.findOne({ slug });

    if (candidate && candidate.id !== id) {
      console.log('Slug is already exists!');
      
      return
    }   
    

    if (thumb?.size) {         
      const { thumbName: newFileName, thumbPath: newThumbPath } = thumbGeneratePathService(thumb, 'products');
      thumbPath = newThumbPath;
      thumbName = newFileName;
    }    

    const payload: any = {
      title,
      description, 
      chars, 
      categoryId: categoryId, 
      price, 
      count,
      status: !!+status
    }

    thumbPath ? payload.thumb = thumbPath : null;

    const req = await ProductsModel.findByIdAndUpdate(id, payload, { new: true }) as iProduct;

    if (thumb?.size) {
      await thumbSaveService(thumb, thumbName, 'products');
    }

    const updatedProduct = JSON.parse(JSON.stringify(req));    

    revalidatePath('/admin/products');

    return updatedProduct
  } catch(err) {
    console.log(err);    
  }


}
