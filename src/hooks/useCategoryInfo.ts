import { getCategoryAction } from "@/actions/categories/getCategoryAction";
import { iProduct } from "@/types";


export const useCategoryInfo = async (products: iProduct[] | undefined, showDisabled: boolean = false): Promise<iProduct[] | []> => {
  if (!products || !products.length) {
    return []
  }

  for (let product of products) {
    if (product.categoryId != 'uncategorized') {
      const categoryInfo = await getCategoryAction(product.categoryId, showDisabled);

      if (categoryInfo) {
        product.category = {
          title: categoryInfo?.title,
          slug: categoryInfo?.slug,
          status: categoryInfo.status
        }
      } else {
        product.category = {
          title: '',
          slug: '',
          status: false
        }
      }
    } else {
      product.category = {
        title: '<uncategorized>',
        slug: 'uncategorized',
        status: true
      }
    }                 
  }

  return products
}
