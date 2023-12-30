'use client'

import Link from "next/link"
import { IconEdit } from "../../../ui/icons/IconEdit"
import { IconEye } from "../../../ui/icons/IconEye"
import { IconTrash } from "../../../ui/icons/IconTrash"
import { IconAdd } from "@/components/ui/icons/IconAdd"
import { iProduct } from "@/types"
import { deleteProductAction } from "@/actions/products/deleteProductAction"
import toast from "react-hot-toast"

export const AdminProductsView = ({ data }: { data: iProduct[] | undefined}) => {  
  const deleteHandler = async (id: string | undefined) => {
    const conf = confirm('Are you sure?');

    if (conf) {
      const deleted = await deleteProductAction(id);
    
      if (deleted?._id) {
        toast.success('Success delete!')
      } else {
        toast.error('Error delete!')
      } 
    }       
  }

  return (
    <>
      <h2 className="text-2xl">Products</h2>
      <div className="mt-6">
        <Link href="/admin/products/add" className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-md inline-flex items-center">
          <IconAdd />
          <span className="inline-block ml-2">Add new</span>
        </Link>
      </div>
      <div>
        <div className="overflow-x-auto mt-10">
          { data?.length ? (
            <table className="w-full whitespace-nowrap table-fixed">
              <thead className="bg-[var(--primary-color)]">
                <tr>
                  {/* <th className="py-3 px-2 rounded-l-lg">ID</th> */}
                  <th className="py-3 px-2 rounded-l-md">Title</th>
                  <th className="py-3 px-2">Category</th>
                  <th className="py-3 px-2">Price</th>
                  <th className="py-3 px-2">Count</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2 rounded-r-md">Actions</th>
                </tr>
              </thead>
              <tbody>
                { data && data.map(({_id, title, category, thumb, status, price, count, slug }, i) => (
                  <tr key={_id} className="border-b border-gray-700 text-center">
                    {/* <td className="py-3 px-2 overflow-hidden text-ellipsis">{_id}</td> */}
                    <td className="py-3 px-2 font-bold text-left">
                      <div className="flex items-center">
                        <span className="block min-w-8 min-h-8 mr-2"><img className="rounded-full w-8 h-8" src={thumb} alt="" /></span>
                        <span className="block overflow-hidden text-ellipsis">{title}</span>
                      </div>
                    </td>
                    
                    <td className="py-3 px-2">{category?.title}</td>
                    <td className="py-3 px-2">{price}$</td>
                    <td className="py-3 px-2">{count}</td>
                    <td className="py-3 px-2">{status ? 'Enabled' : 'Disabled'}</td>
                    <td className="py-3 px-2">
                      <div className="inline-flex items-center space-x-1">
                        <Link href={`/${category?.slug}/${slug}`} className="hover:bg-[var(--hover-color)] rounded-full p-2">
                          <IconEye />
                        </Link>
                        <Link href={`/admin/products/${_id}/edit`} className="hover:bg-[var(--hover-color)] rounded-full p-2">
                          <IconEdit />
                        </Link>
                        <button className="hover:bg-[var(--hover-color)] rounded-full p-2" onClick={() => {deleteHandler(_id)}}>
                          <IconTrash />
                        </button>
                      </div>
                    </td>
                  </tr>  
                )) }                
              </tbody>            
            </table>
          ) : (
            <p>No products...</p>
          )}
        </div>
      </div>
    </>
  )
}
