import { getCategoryAction } from "@/actions/categories/getCategoryAction";
import { AdminCategoriesEditView } from "@/components/views/admin/categories/AdminCategoriesEditView";
import { notFound } from "next/navigation";

const AdminCategoriesEditPage = async (props: any) => {
  const category = await getCategoryAction(props.params.id);

  if (!category) notFound();

  return <AdminCategoriesEditView data={category} />
}

export default AdminCategoriesEditPage
