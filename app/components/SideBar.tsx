"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { GiIceCube } from "react-icons/gi";
import { HiOutlineDocumentReport, HiServer, HiUsers } from "react-icons/hi";
import profile from "../../public/profile_pic.jpg";
/**
 *
 *
 * @returns
 */
const SideBar = () => {
  const pathName = usePathname();

  return (
    <>
      {" "}
      <section>
        <section className="flex text-md-xl mb-3  justify-items-center"></section>
        <section className="flex text-md-xl mb-3  justify-items-center px-2 border-y py-2">
          <figure className="flex">
            <img src={profile.src} alt="profile picture" className="w-[50px] h-[50px] rounded-[50%]" />
            <figcaption className="self-center ps-2 text-sm">Abel Tirop</figcaption>
          </figure>
        </section>
        <section className="px-2 ">
          <section className="flex text-md-xl mb-3 justify-items-center cursor-pointer">
            <HiServer className="self-center me-1 text-lg" />
            <p className="text-[18px] font-bold">POS</p>
          </section>
          <section className="flex  text-md-xl mb-3 cursor-pointer">
            <GiIceCube className="self-center me-1 text-lg" />
            <p className="text-[18px] font-bold">Products</p>
          </section>
          <section className="flex text-md-xl mb-3 cursor-pointer">
            <HiUsers className="self-center me-1 text-lg" />
            <p className="text-[18px] font-bold"> Staff</p>
          </section>
          <section className="flex text-md-xl mb-3 cursor-pointer">
            <HiOutlineDocumentReport className="self-center me-1 text-lg" />
            <p className="text-[18px] font-bold">Reports</p>
          </section>
          <section className="flex text-md-xl cursor-pointer">
            <FiLogOut className="self-center me-1 text-lg " />
            <p className="text-[18px] font-bold">Logout</p>
          </section>
        </section>{" "}
      </section>
    </>
  );
};
export default SideBar;
