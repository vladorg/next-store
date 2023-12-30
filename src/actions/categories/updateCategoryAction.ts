'use server'

import { DB_CONNECT } from "@/db";
import CategoriesModel from "@/db/models/CategoriesModel";
import { thumbGeneratePathService, thumbSaveService } from "@/services/thumbService";
import { iCategory } from "@/types";
import { revalidatePath } from "next/cache";


export const updateCategoryAction = async (id: string | undefined, data: any): Promise<iCategory | undefined> => {
  try {
    if (!id) return

    await DB_CONNECT();

    const { title, description, slug, thumb, status } = Object.fromEntries(data) as any;
    let thumbName = '';
    let thumbPath = '';

    const candidate = await CategoriesModel.findOne({ slug });

    if (candidate && candidate.id !== id) {
      console.log('Slug is already exists!');
      
      return
    }
    

    if (thumb?.size) {         
      const { thumbName: newFileName, thumbPath: newThumbPath } = thumbGeneratePathService(thumb, 'categories');
      thumbPath = newThumbPath;
      thumbName = newFileName;
    }    

    const payload: any = {
      title,
      description,
      slug,
      status: !!+status
    }

    thumbPath ? payload.thumb = thumbPath : null;

    const req = await CategoriesModel.findByIdAndUpdate(id, payload, { new: true }) as iCategory;

    if (thumb?.size) {
      await thumbSaveService(thumb, thumbName, 'categories');
    }

    const updatedCategory = JSON.parse(JSON.stringify(req));    

    revalidatePath('/admin/categories');

    return updatedCategory
  } catch(err) {
    console.log(err);    
  }


}
