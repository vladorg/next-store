import { getCategoriesAction } from "@/actions/categories/getCategoriesAction";
import { getProductAction } from "@/actions/products/getProductAction";
import { AdminProductsEditView } from "@/components/views/admin/products/AdminProductsEditView";
import { notFound } from "next/navigation";

const AdminProductsEditPage = async (props: any) => {
  const product = await getProductAction(props.params.id, true);

  if (!product) notFound();

  const categories = await getCategoriesAction(true);

  return <AdminProductsEditView data={{ product, categories }} />
}

export default AdminProductsEditPage
