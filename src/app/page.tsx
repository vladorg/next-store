import { getCategoriesAction } from "@/actions/categories/getCategoriesAction";
import { getProductsAction } from "@/actions/products/getProductsAction";
import { HomeView } from "@/components/views/HomeView";
import { useCategoryInfo } from "@/hooks/useCategoryInfo";

const HomePage = async () => {
  const categories = await getCategoriesAction();
  let products = await getProductsAction();  
  products = await useCategoryInfo(products);
  products = products.filter((product) => product.category?.status)  ;

  return <HomeView data={{ products, categories }} />
}

export default HomePage;
