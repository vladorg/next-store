'use server'

import { DB_CONNECT } from "@/db"
import ProductsModel from '@/db/models/ProductsModel'
import { thumbGeneratePathService, thumbSaveService } from "@/services/thumbService"
import { iProduct } from "@/types"
import { revalidatePath } from "next/cache"

export const addProductAction = async (data: FormData): Promise<iProduct | undefined> => {
  try {
    await DB_CONNECT();

    const { title, description, chars, categoryId, thumb, price, count, status, slug } = Object.fromEntries(data) as any;
    let thumbName = 'product.png';
    let thumbPath = `http://localhost:3000/static/defaults/${thumbName}`;

    const candidate = await ProductsModel.findOne({ slug });

    if (candidate) {
      console.log('Slug is already exists!');
      return
    }    

    if (thumb?.size) {         
      const { thumbName: newFileName, thumbPath: newThumbPath } = thumbGeneratePathService(thumb, 'products');
      thumbPath = newThumbPath;
      thumbName = newFileName;
    }    

    const req = await ProductsModel.create({
      title,
      description, 
      chars: chars || ' ', 
      categoryId: !!+categoryId || 'uncategorized', 
      thumb: thumbPath, 
      price, 
      count,
      status: !!+status,
      slug
    }) as iProduct;

    if (thumb?.size) {
      await thumbSaveService(thumb, thumbName, 'products');
    }

    const newProduct = JSON.parse(JSON.stringify(req));    

    revalidatePath('/admin/products');
    
    return newProduct
  } catch(err) {
    console.log(err);
  }
}
