'use server'

import { __HOST } from "@/config"
import { DB_CONNECT } from "@/db"
import ProductsModel from '@/db/models/ProductsModel'
import { imageSaveService } from "@/services/imageSaveService"
import { iProduct } from "@/types"
import { revalidatePath } from "next/cache"
import path from "path";

export const addProductAction = async (data: FormData): Promise<iProduct | undefined> => {
  try {
    await DB_CONNECT();

    const { title, description, chars, categoryId, thumb, price, count, status, slug } = Object.fromEntries(data) as any;
    let productThumb = '/static/product.png';

    const candidate = await ProductsModel.findOne({ slug });

    if (candidate) {
      console.log('Slug is already exists!');
      return
    }    

    if (thumb?.size) {         
      const save = await imageSaveService(thumb);   

      if (save) {
        productThumb = save.data.display_url;
      }
    }    

    const req = await ProductsModel.create({
      title,
      description, 
      chars: chars || ' ', 
      categoryId: !!+categoryId || 'uncategorized', 
      thumb: productThumb, 
      price, 
      count,
      status: !!+status,
      slug
    }) as iProduct;

    const newProduct = JSON.parse(JSON.stringify(req));    

    revalidatePath('/admin/products');
    
    return newProduct
  } catch(err) {
    console.log(err);
  }
}
