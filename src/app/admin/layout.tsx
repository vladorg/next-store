import { MainMenu } from '@/components/ui/menus/MainMenu'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const menus = [
    { title: "Dashboard", slug: "/admin" }, 
    { title: "Products", slug: "/admin/products" }, 
    { title: "Categories", slug: "/admin/categories" }, 
    { title: "Orders", slug: "/admin/orders" }, 
    { title: "Members", slug: "/admin/members" }, 
  ];  

  return (
    <>
      <h1 className="text-3xl">Admin panel</h1>
      <div className="flex mt-10 gap-x-6">
        <div className="w-[400px]">
          <MainMenu menus={menus} />
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </>
  )
}

export default AdminLayout;
