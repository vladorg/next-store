'use server'

import { DB_CONNECT } from "@/db";
import CategoriesModel from "@/db/models/CategoriesModel";
import { imageSaveService } from "@/services/imageSaveService";
import { iCategory } from "@/types";
import { revalidatePath } from "next/cache";

export const updateCategoryAction = async (id: string | undefined, data: any): Promise<iCategory | undefined> => {
  try {
    if (!id) return

    await DB_CONNECT();

    const { title, description, slug, thumb, status } = Object.fromEntries(data) as any;
    let productThumb = '';

    const candidate = await CategoriesModel.findOne({ slug });

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
      slug,
      status: !!+status
    }

    productThumb ? payload.thumb = productThumb : null;

    const req = await CategoriesModel.findByIdAndUpdate(id, payload, { new: true }) as iCategory;

    const updatedCategory = JSON.parse(JSON.stringify(req));    

    revalidatePath('/admin/categories');

    return updatedCategory
  } catch(err) {
    console.log(err);    
  }


}
