import { getCategoryAction } from "@/actions/categories/getCategoryAction";
import { getProductsAction } from "@/actions/products/getProductsAction";
import { AdminProductsView } from "@/components/views/admin/products/AdminProductsView";

const AdminProductsPage = async () => {
  const products = await getProductsAction();

  if (products) {
    for (let product of products) {
      if (product.categoryId != 'uncategorized') {
        const categoryInfo = await getCategoryAction(product.categoryId);

        if (categoryInfo) {
          product.category = {
            title: categoryInfo?.title,
            slug: categoryInfo?.slug,
          }
        }
      } else {
        product.category = {
          title: '<uncategorized>',
          slug: 'uncategorized',
        }
      }
                 
    }
  }  

  return <AdminProductsView data={products} />
}

export default AdminProductsPage;
