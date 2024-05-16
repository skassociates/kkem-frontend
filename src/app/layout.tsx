"use client";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Kerala Skills Express | Kerala Knowledge Economy Mission",
//   description:
//     "Kerala Knowledge Economy Mission is an initiative of Government of Kerala to transform Kerala into a Knowledge Economy in general and to provide 20 lakh jobs to educated candidates over a period of five years.",
// };
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{children}</body>
        <ToastContainer />
      </QueryClientProvider>
    </html>
  );
}
