"use client";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "../../public/pos_logo.png";
const Navbar: React.FC<{}> = () => {
  const pathName = usePathname();
  console.log(pathName === "/login");

  return (
    <>
      <nav
        className={`${pathName === "/login" ? "hidden" : "grid"}  grid-cols-2'`}
      >
        <section className="">
          <img src={logo.src} alt="pos logo" className="w-[80px]" />
        </section>
        <section className="">
          <ul className="flex ">
            <li className="pe-1">POS</li>
            <li className="pe-1">Products</li>
            <li className="pe-1">Staffs</li>
            <li className="">Profile</li>
          </ul>
        </section>
      </nav>
    </>
  );
};
export default Navbar;
