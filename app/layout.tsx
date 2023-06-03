import { Inter } from "next/font/google";
import SideBar from "./components/SideBar";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Provider from "./Provider";
export const metadata = {
  title: "Point of sale",
  description: "create by sarorient ltd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-gray-100">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
