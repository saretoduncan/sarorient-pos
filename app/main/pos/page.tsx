import React from "react";

const page = () => {
  return (
    <>
      <main className="grid grid-cols-6 h-screen pt-3">
        <section className="col-span-4 border border-red-500 px-2">
          <div className="bg-gray-800 ps-2 py-2">
            <h4 className="text-white font-bold">ORDERED PRODUCTS</h4>
          </div>
        </section>
        <section className="col-span-2 border border-yellow-500 px-1 ">
          <div className="ps-2 py-3 bg-green-600">
             <h5 className="text-white font-bold">Total: 0.00</h5>
          </div>
         
        </section> 
      </main>
    </>
  );
};
export default page;
