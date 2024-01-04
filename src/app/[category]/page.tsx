import { getCategoryAction } from "@/actions/categories/getCategoryAction";
import { getCategoryBySlugAction } from "@/actions/categories/getCategoryBySlugAction";
import { getProductsByCategoryIdAction } from "@/actions/products/getProductsByCategoryIdAction";
import { CategoryView } from "@/components/views/CategoryView";
import { notFound } from "next/navigation";

const CategoryPage = async (props: any) => {
  const categories = await getCategoryBySlugAction(props.params.category);
  
  if (!categories?.length) notFound();  

  const { _id: categoryId } = categories[0];
  const products = await getProductsByCategoryIdAction(categoryId);  

  return <CategoryView data={{category: categories[0], products}} />
}

export default CategoryPage;
