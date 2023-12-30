'use server'

import { DB_CONNECT } from "@/db"
import CategoriesModel from "@/db/models/CategoriesModel"
import { thumbGeneratePathService, thumbSaveService } from "@/services/thumbService"
import { iCategory } from "@/types"
import { revalidatePath } from "next/cache"

export const addCategoryAction = async (data: FormData): Promise<iCategory | undefined> => {
  try {
    await DB_CONNECT();

    const { title, description, slug, thumb, status } = Object.fromEntries(data) as any;
    let thumbName = 'category.png';
    let thumbPath = `http://localhost:3000/static/defaults/${thumbName}`;

    const candidate = await CategoriesModel.findOne({ slug });

    if (candidate) {
      console.log('Slug is already exists!');
      return
    }
    

    if (thumb?.size) {         
      const { thumbName: newFileName, thumbPath: newThumbPath } = thumbGeneratePathService(thumb, 'categories');
      thumbPath = newThumbPath;
      thumbName = newFileName;
    }    

    const req = await CategoriesModel.create({
      title,
      description, 
      slug, 
      thumb: thumbPath,
      status: !!+status
    }) as iCategory;

    if (thumb?.size) {
      await thumbSaveService(thumb, thumbName, 'categories');
    }

    const newCategory = JSON.parse(JSON.stringify(req));    

    revalidatePath('/admin/categories');
    
    return newCategory
  } catch(err) {
    console.log(err);
  }
}
