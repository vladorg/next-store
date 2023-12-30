'use server'

import { __HOST } from "@/config"
import { DB_CONNECT } from "@/db"
import ProductsModel from '@/db/models/ProductsModel'
import { thumbGeneratePathService, thumbSaveService, thumbSaveServiceTest } from "@/services/thumbService"
import { iProduct } from "@/types"
import { revalidatePath } from "next/cache"
import path from "path";

export const addProductAction = async (data: FormData): Promise<iProduct | undefined> => {
  try {
    await DB_CONNECT();

    const { title, description, chars, categoryId, thumb, price, count, status, slug } = Object.fromEntries(data) as any;
    let thumbName = 'product.png';
    let thumbPath = `${__HOST}/static/defaults/${thumbName}`;

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
      const savePath = path.join(process.cwd(), "src/uploads/products/" + thumbName);
            
      //await thumbSaveService(thumb, thumbName, 'products');
      await thumbSaveServiceTest(thumb, savePath)
    }

    const newProduct = JSON.parse(JSON.stringify(req));    

    revalidatePath('/admin/products');
    
    return newProduct
  } catch(err) {
    console.log(err);
  }
}
