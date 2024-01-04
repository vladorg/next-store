import { getCategoriesAction } from "@/actions/categories/getCategoriesAction";
import { AdminCategoriesView } from "@/components/views/admin/categories/AdminCategoriesView";

const AdminCategoriesPage = async () => {
  const categories = await getCategoriesAction(true);

  return <AdminCategoriesView data={categories} />
}

export default AdminCategoriesPage;
