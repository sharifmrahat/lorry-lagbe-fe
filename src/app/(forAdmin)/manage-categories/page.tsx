/* eslint-disable @next/next/no-img-element */
"use client";
import { format } from "date-fns";
import Spinner from "@/components/common/Spinner";
import { ICategory } from "@/types";
import { useState } from "react";
import EmptyState from "@/components/ui/EmptyState";
import CreateCategory from "@/components/dashboard/admin/manage-categories/CreateCategory";
import { useAllCategoriesQuery } from "@/redux/api/categoryApi";
import UpdateCategory from "@/components/dashboard/admin/manage-categories/UpdateCategory";
import DeleteCategory from "@/components/dashboard/admin/manage-categories/DeleteCategory";

const ManageCategoriesPage = () => {
  const {
    data: categories,
    isLoading,
    refetch: refetchAll,
  } = useAllCategoriesQuery({
    refetchOnMountOrArgChange: true,
  });

  const [categoryId, setCategoryId] = useState("");
  const [deleteId, setDeleteId] = useState("");

  let [isOpen, setIsOpen] = useState(false);
  let [openAlert, setOpenAlert] = useState(false);
  let [openCreate, setOpenCreate] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const handleUpdateCategory = (id: string) => {
    setCategoryId(id);
    openModal();
  };

  const handleDeleteCategory = async (id: string) => {
    setDeleteId(id);
    setOpenAlert(true);
  };
  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 backdrop-blur-md">
          <Spinner />
        </div>
      ) : categories?.data.length ? (
        <>
          <div>
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-base font-semibold leading-6 text-gray-900">
                    Manage Categories
                  </h1>
                  <p className="mt-2 text-sm text-gray-700">
                    Total Categories: {categories?.data?.length}
                  </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                  <button
                    onClick={() => setOpenCreate(true)}
                    type="button"
                    className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Add New Category
                  </button>
                </div>
              </div>
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                              Title
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Created At
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Updated At
                            </th>

                            <th
                              scope="col"
                              className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                            >
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {categories?.data?.map((category: ICategory) => (
                            <tr key={category.id}>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {category.title}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {format(
                                  new Date(category.createdAt),
                                  "dd MMMM yyyy - hh:mm:ss"
                                )}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {format(
                                  new Date(category.updateAt),
                                  "dd MMMM yyyy - hh:mm:ss"
                                )}
                              </td>

                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex flex-row gap-3 justify-end">
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleDeleteCategory(category.id)
                                  }
                                  className="bg-red-200 text-red-800 py-1 px-2 rounded text-xs"
                                >
                                  Delete
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleUpdateCategory(category?.id)
                                  }
                                  className="bg-teal-700 text-white py-1 px-2 rounded text-xs"
                                >
                                  Edit
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {categoryId && (
              <UpdateCategory
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                categoryId={categoryId}
                refetchAll={refetchAll}
              />
            )}
            {deleteId && (
              <DeleteCategory
                isOpen={openAlert}
                setIsOpen={setOpenAlert}
                categoryId={deleteId}
                refetchAll={refetchAll}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="w-fit mx-auto my-20">
            <EmptyState />

            <div className="mt-6 w-fit mx-auto">
              <button
                onClick={() => setOpenCreate(true)}
                type="button"
                className="block rounded-md border-2 border-primary px-3 py-2 text-center text-sm font-semibold text-primary shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Add New Category
              </button>
            </div>
          </div>
        </>
      )}
      <CreateCategory
        isOpen={openCreate}
        setIsOpen={setOpenCreate}
        refetchAll={refetchAll}
      />
    </>
  );
};

export default ManageCategoriesPage;
