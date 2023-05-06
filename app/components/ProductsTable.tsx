import React from "react";
import { BiEdit, BiSearchAlt2 } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Create_Product from "./Create_Product";
const Products_table: React.FC<{}> = () => {
  return (
    <>
      <main className="relative">
        <section className="p"></section>
        <Create_Product/>
        
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
            <button className="bg-green-600 px-1 py-1   rounded justify-self-end text-sm">
              Create Products
            </button>
          </div>
        </section>
        <section className="mx-1 border-x  bg-white">
          <table className="w-[100%] border-1 ">
            <thead className="bg-gray-300 text-sm md:text-[15px] border-b">
              <tr>
                <th className="text-start">Product Name</th>
                <th className="text-start">Code</th>
                <th className="text-start">Brand</th>
                <th className="text-start">Selling Price</th>
                <th className="text-start">Best Price</th>
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
                  <BiEdit className="text-md  text-green-500 self-center my-auto" />
                  <RiDeleteBin6Fill className="text-md  text-red-500 self-center my-auto" />
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
                  <BiEdit className="text-md  text-green-500 self-center my-auto" />
                  <RiDeleteBin6Fill className="text-md  text-red-500 self-center my-auto" />
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
