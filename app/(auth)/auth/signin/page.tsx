"use client";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import logo from "../../../../public/pos_logo.png";
import { ILogin } from "../../../interfaces/frontendInterface/ILogin";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const Login: React.FC<{}> = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const handleLoginSubmit: SubmitHandler<ILogin> = async (loginInfo, e) => {
    const { username, password } = loginInfo;

    const results = await signIn("credentials", {
      username: username,
      password: password,
      redirect:false
    });
    if (results && results.error) {
      setErrorMsg(results.error);
    } else {
      setErrorMsg("");
      console.log(results);
      console.log("user ...... " + session?.user.id);
      push("/");
    }
  };
  useEffect(() => {
    console.log(status);
    console.log("username ----" + session?.user.accessToken);
    console.log(session?.expires);
    if (status === "authenticated") {
      push("/");
    }
  }, [session]);
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
            <span className="text-red-500 text-sm">{errorMsg}</span>
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
