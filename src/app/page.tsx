import { getCategoriesAction } from "@/actions/categories/getCategoriesAction";
import { getProductsAction } from "@/actions/products/getProductsAction";
import { HomeView } from "@/components/views/HomeView";
import { useCategoryInfo } from "@/hooks/useCategoryInfo";
import { delay } from "./utils/delay";

export const dynamic = 'force-dynamic'; 
// dynamic need for say to next what this page is a dynamic (not static)
// and here will be use revalidator 
// (if this page is static and use a validator here, there will be an ERROR)

const HomePage = async () => {
  const categories = await getCategoriesAction();
  let products = await getProductsAction();  
  products = await useCategoryInfo(products);
  products = products.filter((product) => product.category?.status);

  //await delay(22222222)

  return <HomeView data={{ products, categories }} />
}

export default HomePage;
