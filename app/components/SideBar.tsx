"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { GiIceCube } from "react-icons/gi";
import { HiOutlineDocumentReport, HiServer, HiUsers } from "react-icons/hi";
import logo from "../../public/pos_logo.png";
import profile from "../../public/profile_pic.jpg";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
/**
 *
 *
 * @returns
 */
const SideBar = () => {
  const { data: session, status } = useSession();
  const [] = useState();
  const { push } = useRouter();
  const pathName = usePathname();
  const logout = async () => {
    console.log("logout");
    await signOut({
      redirect: true,
      callbackUrl: "/auth/signin",
    });
    push("/auth/signin");
  };
  return (
    <>
      {" "}
      <section>
        <section className="flex text-md-xl mb-3  justify-items-center">
          <figure className="flex px-1">
            <img src={logo.src} alt="pos logo" className="w-[30px]" />
            <figcaption className="self-center font-bold">
              Sarorient POS
            </figcaption>
          </figure>
        </section>
        <section className="flex text-md-xl mb-3  justify-items-center px-2 border-y border-gray-500 py-2">
          <figure className="flex">
            <img
              src={profile.src}
              alt="profile picture"
              className="w-[50px] h-[50px] rounded-[50%]"
            />
            <figcaption className="self-center ps-2 text-sm">
              {session?.user.username}
            </figcaption>
          </figure>
        </section>
        <section className="px-2 ">
          <Link
            href="/"
            className={`flex text-md-xl mb-3 justify-items-center cursor-pointer rounded ${
              pathName === "/" ? "bg-blue-500" : ""
            }`}
          >
            <HiServer className="self-center mx-1 text-lg" />
            <p className="text-[18px] font-bold">POS</p>
          </Link>
          <Link
            href="/products"
            className={`flex text-md-xl mb-3 justify-items-center cursor-pointer rounded ${
              pathName === "/products" ? "bg-blue-500" : ""
            }`}
          >
            <GiIceCube className="self-center mx-1 text-lg" />
            <p className="text-[18px] font-bold">Products</p>
          </Link>
          <Link href="" className="flex text-md-xl mb-3 cursor-pointer">
            <HiUsers className="self-center mx-1 text-lg" />
            <p className="text-[18px] font-bold"> Staff</p>
          </Link>
          <Link href="" className="flex text-md-xl mb-3 cursor-pointer">
            <HiOutlineDocumentReport className="self-center mx-1 text-lg" />
            <p className="text-[18px] font-bold">Reports</p>
          </Link>
          <button onClick={() => logout()}>
            <Link href="" className="flex text-md-xl cursor-pointer">
              <FiLogOut className="self-center mx-1 text-lg " />
              <p className="text-[18px] font-bold">Logout</p>
            </Link>
          </button>
        </section>{" "}
      </section>
    </>
  );
};
export default SideBar;
