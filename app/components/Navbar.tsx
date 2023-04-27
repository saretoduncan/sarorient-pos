'use client';
import React from "react";
import logo from "../../public/pos_logo.png"
import { usePathname } from "next/navigation";
export const Navbar: React.FC<{}> = () => {
  const pathName= usePathname()
  console.log(pathName==='/login');

  return (
    <>
      <nav className={`${pathName==='/login' ? 'hidden':'grid'}  grid-cols-2'`}>
        <section className=''>
          <img src={logo.src} alt='pos logo' className='w-[80px]' />
        </section>
        <section className='grid'></section>
      </nav>
    </>
  );
};
