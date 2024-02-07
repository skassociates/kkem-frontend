import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kerala Skills Express | Kerala Knowledge Economy Mission",
  description:
    "Kerala Knowledge Economy Mission is an initiative of Government of Kerala to transform Kerala into a Knowledge Economy in general and to provide 20 lakh jobs to educated candidates over a period of five years.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <ToastContainer />
    </html>
  );
}
