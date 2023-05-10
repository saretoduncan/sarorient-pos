import { BiEdit } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

export default function Ordered_products() {
  return (
    <>
      <section className=" border-x  bg-white">
        <table className="w-[100%] table-auto  border-gray-300">
          <thead className="bg-gray-300 text-sm md:text-[15px] border-b">
            <tr>
              <th className="text-start">Product</th>
              <th className="text-start">Code</th>
              <th className="text-start">Brand</th>
              <th className="text-start">Price(ksh)</th>
              <th className="text-start">Qty</th>
              <th className="text-start">Unit</th>

              <th className="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b ">
              <td className="">Disk plate</td>
              <td className="">PT009</td>
              <td className="">YOG</td>
              <td className="">200</td>
              <td className="">1</td>
              <td className="">PC</td>

              <td className=" grid space-x-1">
                {" "}
                <button className="bg-red-600 mx-auto self-center rounded-[50%] p-[2px]">
                  <IoMdClose className="text-md  text-white self-center text-[20px]" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
