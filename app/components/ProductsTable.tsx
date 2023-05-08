"use client";
import React from "react";
import { BiEdit, BiSearchAlt2 } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Create_Product from "./Create_Product";
import { useProductFormStore, useStoreChangeFormPurpose } from "@/store";
const Products_table: React.FC<{}> = () => {
  const openCreateForm = useProductFormStore((state) => state.toggleForm);
  const isUpdateForm = useStoreChangeFormPurpose((state) => state.toggleForm);
  const openCreateProductForm = (isUpdate: boolean) => {
    isUpdateForm(isUpdate);
    openCreateForm(true);
  };

  return (
    <>
      <main className="relative h-screen">
        <section
          className={`absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.52)] ${
            useProductFormStore((state) => state.form_open) ? "flex" : "hidden"
          } justify-center`}
        >
          {" "}
          <div className="my-auto border rounded bg-white p-5">
            <Create_Product />
          </div>
        </section>

        <section className="grid grid-cols-2 p-2">
          <div className="flex space-x-1">
            <div>
              <input
                type="text"
                placeholder="search product"
                className="shadow-lg  focus:outline-none rounded-3xl focus:ring focus:ring-gray-100 px-1"
              />
            </div>
            <div>
              <button className="text-xl self-center p-1">
                <BiSearchAlt2 />
              </button>
            </div>
          </div>
          <div className="grid">
            <button
              className="bg-green-600 px-1 py-1   rounded justify-self-end text-sm font-bold text-white"
              onClick={() => openCreateProductForm(false)}
            >
              Create Products
            </button>
          </div>
        </section>
        <section className="mx-1 border-x  bg-white">
          <table className="w-[100%] table-auto  border-gray-300">
            <thead className="bg-gray-300 text-sm md:text-[15px] border-b">
              <tr>
                <th className="text-start">Product Name</th>
                <th className="text-start">Code</th>
                <th className="text-start">Brand</th>
                <th className="text-start">Buying Price(ksh)</th>
                <th className="text-start">Price(ksh)</th>
                <th className="text-start">Qty</th>
                <th className="text-start">Unit</th>

                <th className="text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="">engine oil</td>
                <td className="">PT009</td>
                <td className="">oilibia</td>
                <td className="">230</td>
                <td className="">200</td>
                <td className="">25</td>
                <td className="">pc</td>

                <td className=" flex space-x-1">
                  {" "}
                  <button onClick={() => openCreateProductForm(true)}>
                    <BiEdit className="text-md  text-green-500 self-center my-auto" />
                  </button>
                  <button>
                    <RiDeleteBin6Fill className="text-md  text-red-500 self-center my-auto" />
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="">engine oil</td>
                <td className="">PT009</td>
                <td className="">oilibia</td>
                <td className="">230</td>
                <td className="">200</td>
                <td className="">25</td>
                <td className="">pc</td>

                <td className=" flex space-x-1">
                  {" "}
                  <button>
                    <BiEdit className="text-md  text-green-500 self-center my-auto" />
                  </button>
                  <button>
                    <RiDeleteBin6Fill className="text-md  text-red-500 self-center my-auto" />
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="">clutch plate</td>
                <td className="">PT009</td>
                <td className="">Yog</td>
                <td className="">230</td>
                <td className="">200</td>
                <td className="">25</td>
                <td className="">pc</td>

                <td className=" flex space-x-1">
                  {" "}
                  <BiEdit className="text-md  text-green-500 self-center my-auto" />
                  <RiDeleteBin6Fill className="text-md  text-red-500 self-center my-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};
export default Products_table;
