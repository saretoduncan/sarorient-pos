"use client";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import logo from "../../../public/pos_logo.png";
import { ILogin } from "../../interfaces/frontendInterface/ILogin";
import { signIn, useSession } from "next-auth/react";

const Login: React.FC<{}> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
const {data} = useSession()
useEffect(() => {
  // Check if the user is already signed in
  if (data) {
    // Handle the signed-in user as desired
    console.log('User is signed in:', data.user);
  }
}, [data]);
  const handleLoginSubmit: SubmitHandler<ILogin> = async (loginInfo, e) => {
    const { username, password } = loginInfo;
    try {
      const results = await signIn("Credentials", {
     
        username: username,
        password: password,
      });
    } catch (e) {
      console.log(e);
    }

    console.log({ username, password });
  };
  return (
    <>
      <section className="grid w-screen h-screen">
        <section className="justify-self-center self-center border rounded p-3">
          <figure className="grid">
            <img
              src={logo.src}
              alt="pos logo image"
              className="justify-self-center w-[100px]"
            />
            <figcaption className="text-center">Sarorient POS</figcaption>
          </figure>
          <div>
            <form onSubmit={handleSubmit(handleLoginSubmit)}>
              <div className="flex flex-col mb-3">
                <label htmlFor="username">Username</label>
                <input
                  placeholder="Username"
                  id="username"
                  type="text"
                  required
                  className=" border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm "
                  {...register("username", {
                    required: true,
                  })}
                />
                {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col mb-3">
                <label>Password</label>
                <input
                  className="border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 "
                  placeholder="Password"
                  type="password"
                  required
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
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
      </section>
    </>
  );
};
export default Login;
