"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/IProducts";
import { useProductFormStore, useStoreChangeFormPurpose } from "@/store";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Create_Product() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>();

  const closeForm = useProductFormStore((state) => state.toggleForm);
  const handleSubmitProduct: SubmitHandler<IProduct> = (productInfo) => {
    console.log(productInfo);
  };
  const isUpdate = useStoreChangeFormPurpose((state) => state.isUpdate);

  return (
    <>
      <section className="relative">
        <div className="absolute top-0 right-2">
          <button onClick={() => closeForm(false)}>
            <AiFillCloseCircle className="text-red-500 text-[24px]" />
          </button>
        </div>
        <h3 className="font-bold text-lg">{`${
          isUpdate ? "Update product" : "Add new product"
        }`}</h3>
        <div>
          <form onSubmit={handleSubmit(handleSubmitProduct)}>
            <div className="flex flex-col mb-3">
              <label htmlFor="productName">Product Name</label>
              <input
                placeholder="Product Name"
                id="productName"
                type="text"
                required
                className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                {...register("product", {
                  required: true,
                })}
              />
              {errors.product && (
                <span className="text-red-500 text-sm">
                  {errors.product.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="productCode">Product Code</label>
              <input
                placeholder="Product Code"
                id="productCode"
                type="text"
                required
                className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                {...register("code", {
                  required: true,
                })}
              />
              {errors.code && (
                <span className="text-red-500 text-sm">
                  {errors.code.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="productBrand">Product Brand</label>
              <input
                placeholder="Product Brand"
                id="productName"
                type="text"
                required
                className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                {...register("brand", {
                  required: true,
                })}
              />
              {errors.brand && (
                <span className="text-red-500 text-sm">
                  {errors.brand.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="buyingPrice">Buying Price</label>
              <input
                placeholder="Buying Price"
                id="buyingPrice"
                type="number"
                required
                className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                {...register("buyingPrice", {
                  required: true,
                })}
              />
              {errors.buyingPrice && (
                <span className="text-red-500 text-sm">
                  {errors.buyingPrice.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="price">Price</label>
              <input
                placeholder="price"
                id="price"
                type="number"
                required
                className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                {...register("price", {
                  required: true,
                })}
              />
              {errors.price && (
                <span className="text-red-500 text-sm">
                  {errors.price.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="productQuantity">Quantity</label>
              <input
                placeholder="Quantity"
                id="productQuantity"
                type="number"
                required
                className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                {...register("quantity", {
                  required: true,
                })}
              />
              {errors.quantity && (
                <span className="text-red-500 text-sm">
                  {errors.quantity.message}
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-600 rounded text-white py-1 w-full"
              >
                {`${isUpdate ? "Update Product": "Create Product"}`}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
