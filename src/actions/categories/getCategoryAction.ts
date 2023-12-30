'use server'

import { DB_CONNECT } from "@/db"
import CategoriesModel from '@/db/models/CategoriesModel'
import { iCategory } from "@/types"

export const getCategoryAction = async (id: string): Promise<iCategory | undefined> => {
  try {
    await DB_CONNECT();      

    const req = await CategoriesModel.findById(id) as iCategory;

    const category = JSON.parse(JSON.stringify(req));    
    
    return category
  } catch(err) {
    console.log(err);
  }
}
