'use server'

import { DB_CONNECT } from "@/db"
import CategoriesModel from "@/db/models/CategoriesModel"
import { iCategory } from "@/types"

export const getCategoriesAction = async (): Promise<iCategory[] | undefined> => {
  try {
    await DB_CONNECT();      

    const req = await CategoriesModel.find() as iCategory[];

    const categories = JSON.parse(JSON.stringify(req));    
    
    return categories
  } catch(err) {
    console.log(err);
  }
}
