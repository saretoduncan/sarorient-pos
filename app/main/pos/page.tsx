import Ordered_products from "@/app/components/Ordered_products";
import Search_bar from "@/app/components/Search_bar";
import React from "react";

const page = () => {
  return (
    <>
      <main className="grid grid-cols-6 h-screen pt-3">
        <section className="col-span-4  px-2">
          <div className="bg-gray-800 ps-2 py-2">
           <Search_bar/>
          </div>
          <Ordered_products />
        </section>
        <section className="col-span-2  px-1 ">
          <div className="ps-2 py-3 bg-green-600">
            <h5 className="text-white font-bold">Total: 0.00</h5>
          </div>
          <div>
            <h5>Payment method</h5>
          </div>
        </section>
      </main>
    </>
  );
};
export default page;
