import { headers } from "next/headers";
import SideBar from "../components/SideBar";

import { usePathname } from "next/navigation";
import { getServerSession } from "next-auth";
export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <>
      <section className="grid grid-cols-6 h-screen">
        {" "}
        <aside className="col-span-1 pt-3 bg-gray-800  text-white">
          <SideBar />
        </aside>
        <main className="col-span-5 ">{children}</main>
      </section>
    </>
  );
}
