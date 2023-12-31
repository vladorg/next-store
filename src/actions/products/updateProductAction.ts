'use server'

import { DB_CONNECT } from "@/db";
import ProductsModel from "@/db/models/ProductsModel";
import { imageSaveService } from "@/services/imageSaveService";
import { iProduct } from "@/types";
import { revalidatePath } from "next/cache";
import { useCorrectUrl } from "@/hooks/useCorrectUrl"

export const updateProductAction = async (id: string | undefined, data: any): Promise<iProduct | undefined> => {
  try {
    if (!id) return

    await DB_CONNECT();

    const { title, description, chars, categoryId, thumb, price, count, status, slug } = Object.fromEntries(data) as any;
    const newSlug = useCorrectUrl(slug);
    let productThumb = '';

    const candidate = await ProductsModel.findOne({ slug: newSlug });

    if (candidate && candidate.id !== id) {
      console.log('Slug is already exists!');
      
      return
    }      

    if (thumb?.size) {         
      const save = await imageSaveService(thumb);   

      if (save) {
        productThumb = save.data.display_url;
      }
    }    

    const payload: any = {
      title,
      description, 
      chars, 
      categoryId: categoryId || 'uncategorized',
      price, 
      count,
      slug: newSlug,
      status: !!+status
    }

    productThumb ? payload.thumb = productThumb : null;

    const req = await ProductsModel.findByIdAndUpdate(id, payload, { new: true }) as iProduct;

    const updatedProduct = JSON.parse(JSON.stringify(req));    

    revalidatePath('/', 'layout');

    return updatedProduct
  } catch(err) {
    console.log(err);    
  }


}
