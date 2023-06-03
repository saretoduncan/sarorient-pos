"use client";
import Ordered_products from "@/app/components/Ordered_products";
import PaymentMethod from "@/app/components/PaymentMethod";
import Search_bar from "@/app/components/Search_bar";
import { usePaymentMethodStore } from "@/store";
import { useSession } from "next-auth/react";
import { BsCash } from "react-icons/bs";
const page = () => {
  const {status} = useSession()
  console.log(status)

  return (
    <>
      <main className="grid grid-cols-6 h-screen pt-3">
        <section className="col-span-4  px-2">
          <div className="bg-gray-800 ps-2 py-2 mb-3">
            <Search_bar />
          </div>
          <Ordered_products />
        </section>
        <section className="col-span-2  px-1 ">
          <div className="bg-white h-[100%]">
            <div className="ps-2 py-3 bg-green-600">
              <h5 className="text-white font-bold text-[30px] ">Total: 0.00</h5>
            </div>

            <div className="px-2 bg-gray-200 mb-3">
              <h5>Payment Method</h5>
              <PaymentMethod />
            </div>
            <div className="px-2">
              {usePaymentMethodStore((state) => state.isMpesa) ? (
                <div className={`flex flex-col mb-2`}>
                  <label htmlFor="phoneNumber">Phone number</label>
                  <input
                    type="number"
                    id="phoneNumber"
                    placeholder="+254 7xxxxxxx"
                    className=" ring-1 ring-green-100 focus:border-none focus:outline-none focus:ring-2 rounded focus:ring-green-400 px-2"
                  />
                </div>
              ) : (
                ""
              )}
              <div className="flex flex-col mb-2">
                <label htmlFor="payment">Payment</label>
                <input
                  type="number"
                  id="payment"
                  className=" ring-1 ring-green-100 focus:border-none focus:outline-none focus:ring-2 rounded focus:ring-green-400 px-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="change">Change</label>
                <input
                  type="number"
                  id="change"
                  className=" ring-1 ring-green-100 focus:border-none focus:outline-none focus:ring-2 rounded focus:ring-green-400 px-2"
                />
              </div>
            </div>
            <div className="px-2 mt-3">
              <button className="text-white bg-blue-500 w-[100%] rounded py-1 font-bold">
                Make Payment
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default page;
