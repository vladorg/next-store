'use client'

import Link from "next/link"
import { IconEdit } from "../../../ui/icons/IconEdit"
import { IconEye } from "../../../ui/icons/IconEye"
import { IconTrash } from "../../../ui/icons/IconTrash"
import { IconAdd } from "@/components/ui/icons/IconAdd"
import { iCategory } from "@/types"
import { deleteCategoryAction } from "@/actions/categories/deleteCategoryAction"
import toast from "react-hot-toast"

export const AdminCategoriesView = ({ data }: { data: iCategory[] | undefined}) => {
  const deleteHandler = async (id: string | undefined) => {
    const conf = confirm('Are you sure?');

    if (conf) {
      const deleted = await deleteCategoryAction(id);
    
      if (deleted?._id) {
        toast.success('Success delete!')
      } else {
        toast.error('Error delete!')
      } 
    }       
  }

  return (
    <>
      <h2 className="text-2xl">Categories</h2>
      <div className="mt-6">
        <Link href="/admin/categories/add" className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-md inline-flex items-center">
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
                  <th className="py-3 px-2 rounded-l-lg">Title</th>
                  <th className="py-3 px-2">Slug</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2 rounded-r-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                { data && data.map(({title, thumb, slug, status, _id}, i) => (
                  <tr key={_id} className="border-b border-gray-700 text-center">
                    <td className="py-3 px-2 font-bold text-left">
                      <div className="inline-flex space-x-3 items-center">
                        <span><img className="rounded-full w-8 h-8" src={thumb} alt="" /></span>
                        <span>{title}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-bold">{slug}</td>                  
                    <td className="py-3 px-2">{status ? 'Enabled' : 'Disabled'}</td>
                    <td className="py-3 px-2">
                      <div className="inline-flex items-center space-x-1">
                        <Link href={`/${slug}`} className="hover:bg-[var(--hover-color)] rounded-full p-2">
                          <IconEye />
                        </Link>
                        <Link href={`/admin/categories/${_id}/edit`} className="hover:bg-[var(--hover-color)] rounded-full p-2">
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
            <p>No categories...</p>
          )}
        </div>
      </div>
    </>
  )
}
