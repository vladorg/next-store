import { getCategoriesAction } from "@/actions/categories/getCategoriesAction";
import { AdminProductsAddView } from "@/components/views/admin/products/AdminProductsAddView";

const AdminProductsAddPage = async () => {
  const categories = await getCategoriesAction();

  return <AdminProductsAddView data={categories} />
}

export default AdminProductsAddPage;
