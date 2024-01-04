import { getProductsAction } from "@/actions/products/getProductsAction";
import { AdminProductsView } from "@/components/views/admin/products/AdminProductsView";
import { useCategoryInfo } from "@/hooks/useCategoryInfo";

export const dynamic = 'force-dynamic';

const AdminProductsPage = async () => {
  let products = await getProductsAction(true);

  products = await useCategoryInfo(products, true); 

  return <AdminProductsView data={products} />
}

export default AdminProductsPage;
