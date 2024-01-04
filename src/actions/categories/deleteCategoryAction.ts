'use server'

import { DB_CONNECT } from "@/db";
import CategoriesModel from "@/db/models/CategoriesModel";
import { iCategory } from "@/types";
import { revalidatePath } from "next/cache";

export const deleteCategoryAction = async (id: string | undefined): Promise<iCategory | undefined> => {
  try {
    if (!id) return

    await DB_CONNECT();

    const req = await CategoriesModel.findByIdAndDelete(id);

    const deletedCategory = JSON.parse(JSON.stringify(req));    

    //revalidatePath('/admin/categories');

    return deletedCategory
  } catch(err) {
    console.log(err);    
  }
}
