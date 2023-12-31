import { getProductAction } from "@/actions/products/getProductAction";
import { useCategoryInfo } from "@/hooks/useCategoryInfo";
import { iProduct } from "@/types";

export const lsLoadCartService = async (): Promise<iProduct[] | []> => {
  try {
    const cart = localStorage.getItem('cart');
    if (cart) {
      let products = [];
      let parsed = JSON.parse(cart);

      for (let parsed_product of parsed) {
        let product = await getProductAction(parsed_product?.id);

        if (product) {
          product.quantity = +parsed_product.quantity;
          product ? products.push(product) : null;
        }                  
      }      
      
      products = await useCategoryInfo(products);

      return products
    } else {
      return []
    }
    return []
  } catch(err) {
    console.log(err);
    return []    
  }
}
