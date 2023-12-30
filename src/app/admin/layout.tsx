import { HeroMenu } from '@/components/ui/menus/HeroMenu'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const menus = [
    { title: "Dashboard", href: "/admin" }, 
    { title: "Products", href: "/admin/products" }, 
    { title: "Categories", href: "/admin/categories" }, 
    { title: "Orders", href: "/admin/orders" }, 
    { title: "Members", href: "/admin/members" }, 
  ];  

  return (
    <>
      <h1 className="text-3xl">Admin panel</h1>
      <div className="flex mt-10 gap-x-6">
        <div className="w-[400px]">
          <HeroMenu menus={menus} />
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </>
  )
}
