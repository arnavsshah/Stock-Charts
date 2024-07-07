import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";

import { NavBar } from "@/components";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Stock Picker",
  description: "Select and Analyse Stocks",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <div className="flex flex-col w-full min-h-screen bg-gradient-to-r from-slate-600 to-slate-200">
          <NavBar />
          <div className="flex flex-col w-full h-full p-8 mt-24">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
