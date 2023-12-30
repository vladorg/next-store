'use server'

import { __HOST } from "@/config"
import { DB_CONNECT } from "@/db"
import CategoriesModel from "@/db/models/CategoriesModel"
import { imageSaveService } from "@/services/imageSaveService"
import { iCategory } from "@/types"
import { revalidatePath } from "next/cache"

export const addCategoryAction = async (data: FormData): Promise<iCategory | undefined> => {
  try {
    await DB_CONNECT();

    const { title, description, slug, thumb, status } = Object.fromEntries(data) as any;
    let productThumb = '/static/category.png';

    const candidate = await CategoriesModel.findOne({ slug });

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

    const req = await CategoriesModel.create({
      title,
      description, 
      slug, 
      thumb: productThumb,
      status: !!+status
    }) as iCategory;

    const newCategory = JSON.parse(JSON.stringify(req));    

    revalidatePath('/admin/categories');
    
    return newCategory
  } catch(err) {
    console.log(err);
  }
}
