import { getProductsAction } from "@/actions/products/getProductsAction";
import { ProductView } from "@/components/views/ProductView";
import { useCategoryInfo } from "@/hooks/useCategoryInfo";
import { notFound } from "next/navigation";

const ProductPage = async (props: any) => {
  let products = await getProductsAction();

  if (!products?.length) notFound();  

  products = await useCategoryInfo(products);
  products = products.filter((product) => product.category?.status)  

  const currentProduct = products.find(({ slug }) => slug == props.params.product);   

  if (!currentProduct || !currentProduct.category?.status) notFound(); // 404 if wrong id or category has disabled status  

  products = products.filter(({ slug }) => slug != props.params.product);  

  return <ProductView data={{ currentProduct, products }} />
}

export default ProductPage;
