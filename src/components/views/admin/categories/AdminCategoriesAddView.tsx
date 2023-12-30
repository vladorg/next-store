'use client'

import { addCategoryAction } from "@/actions/categories/addCategoryAction";
import Link from "next/link";
import { useRef, useState } from "react";
import toast from "react-hot-toast";


export const AdminCategoriesAddView = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inputClassNames = 'w-full rounded-md bg-white p-2 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md';

  const actionHandler = async (formData: FormData) => {
    const result = await addCategoryAction(formData);    
    
    if (result?._id) {
      setSuccess(true)
      formRef.current?.reset()
    } else {
      toast.error('Failed add category!')
    }
  } 

  return (
    <>
      { !success ? (
        <>
          <h2 className="text-2xl">Add new category</h2>
          <div className="mt-10">
            <form action={e => actionHandler(e)} ref={formRef}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
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
                  name="description"
                  id="description"
                  placeholder="Description"
                  className={inputClassNames}
                />
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
                <input
                  type="file"
                  name="thumb"
                  id="thumb"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="category"
                  className="mb-3 block text-base font-medium"
                >
                  Status
                </label>
                <select defaultValue="0" name="status" id="status" className={inputClassNames}>
                  <option value="0">Disabled</option>
                  <option value="1">Enabled</option>
                </select>
              </div>
              <div>
                <button className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] py-2 px-3 rounded-md" >
                  Add
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
              Add more
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
