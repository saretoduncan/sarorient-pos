"use client";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Create_Product() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  return (
    <>
      <section className="">
        <h3>Add new product</h3>
        <div>
          <form>
            <div className="flex flex-col mb-3">
              <label htmlFor="productName">Product Name</label>
              <input
                placeholder="Product Name"
                id="productName"
                type="text"
                required
                className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                {...register("productName", {
                  required: true,
                })}
              />
              {/* {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )} */}
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="productCode">Product Name</label>
              <input
                placeholder="Product Code"
                id="productCode"
                type="text"
                required
                className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                {...register("productCode", {
                  required: true,
                })}
              />
              {/* {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )} */}
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="productBrand">Product Name</label>
              <input
                placeholder="Product Brand"
                id="productName"
                type="text"
                required
                className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                {...register("productBrand", {
                  required: true,
                })}
              />
              {/* {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )} */}
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="buyingPrice">Product Name</label>
              <input
                placeholder="Buying Price"
                id="buyingPrice"
                type="number"
                required
                className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                {...register("productName", {
                  required: true,
                })}
              />
              {/* {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )} */}
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="price">Product Name</label>
              <input
                placeholder="price"
                id="price"
                type="number"
                required
                className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                {...register("productName", {
                  required: true,
                })}
              />
              {/* {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )} */}
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="productQuantity">Product Name</label>
              <input
                placeholder="Quantity"
                id="productQuantity"
                type="number"
                required
                className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                {...register("productName", {
                  required: true,
                })}
              />
              {/* {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )} */}
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-600 rounded text-white py-1 w-full"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
