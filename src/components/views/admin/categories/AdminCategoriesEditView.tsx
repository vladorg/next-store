'use client'

import { updateCategoryAction } from "@/actions/categories/updateCategoryAction";
import { iCategory } from "@/types";
import Link from "next/link";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export const AdminCategoriesEditView = ({ data }: { data: iCategory}) => {
  const [success, setSuccess] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inputClassNames = 'w-full rounded-md bg-white p-2 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md';

  const { title, description, thumb, _id, slug, status  } = data;
  const thumbPath = thumb?.includes('i.ibb.co') ? thumb : '/static/category.png';

  const actionHandler = async (formData: FormData) => {
    const result = await updateCategoryAction(_id, formData);    
    
    if (result?._id) {
      setSuccess(true)
      formRef.current?.reset()
    } else {
      toast.error('Failed edit category!')
    }
  }  

  return (
    <>
      { !success ? (
        <>
          <h2 className="text-2xl">Edit <span className="underline">{title}</span></h2>
          <div className="mt-10">
            <form action={e => actionHandler(e)} ref={formRef}>
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="mb-3 block text-base font-medium"
                >
                  Title
                </label>
                <input
                  required
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  defaultValue={title}
                  className={inputClassNames}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="mb-3 block text-base font-medium"
                >
                  Description
                </label>
                <textarea
                  required
                  name="description"
                  id="description"
                  placeholder="Description"
                  defaultValue={description}
                  className={inputClassNames}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="thumb"
                  className="mb-3 block text-base font-medium"
                >
                  Thumb
                </label>
                <div className="flex items-center">
                  <img src={thumbPath} className="w-20 h-20 object-cover" alt="" />
                  <input
                    type="file"
                    name="thumb"
                    id="thumb"
                    className="ml-4"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="slug"
                  className="mb-3 block text-base font-medium"
                >
                  Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  id="slug"
                  placeholder="Slug"
                  defaultValue={slug}
                  className={inputClassNames}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="category"
                  className="mb-3 block text-base font-medium"
                >
                  Status
                </label>
                <select defaultValue={+status} name="status" id="status" className={inputClassNames}>
                  <option value="0">Disabled</option>
                  <option value="1">Enabled</option>
                </select>
              </div>
              <div>
                <button className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-md" >
                  Save
                </button>
                <Link href="/admin/categories" type="button" className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-md ml-4" >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl text-[var(--green-color)]">Success!</h2>
          <div className="mt-8">
            <button type="button" onClick={() => setSuccess(false)} className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-md" >
              Edit again
            </button>
            <Link href="/admin/categories" type="button" className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-md ml-4" >
              Back to categories
            </Link>
          </div>
        </>
      )}
    </>
  )
}
