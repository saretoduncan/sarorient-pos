"use client";
import React from "react";
import logo from "../../public/pos_logo.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "../interfaces/frontendInterface/ILogin";

const Login: React.FC<{}> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const handleLoginSubmit: SubmitHandler<ILogin> = (loginInfo) => {
    console.log(loginInfo);
  };
  return (
    <>
      <section className='grid w-screen h-screen'>
        <section className='justify-self-center self-center border rounded p-3'>
          <figure className='grid'>
            <img
              src={logo.src}
              alt='pos logo image'
              className='justify-self-center w-[100px]'
            />
            <figcaption className='text-center'>Sarorient POS</figcaption>
          </figure>
          <div>
            <form onSubmit={handleSubmit(handleLoginSubmit)}>
              <div className='flex flex-col mb-3'>
                <label htmlFor='username'>Username</label>
                <input
                  placeholder='Username'
                  id='username'
                  type='text'
                  required
                  className=' border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm '
                  {...register("username", {
                    required: true,
                  })}
                />
                {errors.username && (
                  <span className='text-red-500 text-sm'>
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div className='flex flex-col mb-3'>
                <label>Password</label>
                <input
                  className='border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 '
                  placeholder='Password'
                  type='password'
                  required
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors.password && (
                  <span className='text-red-500 text-sm'>
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div>
                <button
                  type='submit'
                  className='bg-blue-600 rounded text-white py-1 w-full'
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};
export default Login;
