'use server'

import { DB_CONNECT } from "@/db"
import CategoriesModel from '@/db/models/CategoriesModel'
import { iCategory } from "@/types"

export const getCategoryBySlugAction = async ( 
  slug: string | undefined, showDisabled: boolean = false
): Promise<iCategory[] | undefined> => {
  try {
    if (!slug) return
    
    await DB_CONNECT();      

    const filter = !showDisabled ? {'slug': slug, status: true} : {'slug': slug};
    const req = await CategoriesModel.find(filter) as iCategory[];

    const category = JSON.parse(JSON.stringify(req));    
    
    return category
  } catch(err) {
    console.log(err);
  }
}
