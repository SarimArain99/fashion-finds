import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ShopProvider } from "./context/ShopContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FASHION.FINDS",
  description:
    "A modern e-commerce platform designed to provide a seamless shopping experience for users. It features a user-friendly interface, product categories, filters, and a secure checkout process. This project showcases my ability to create dynamic web applications with a focus on functionality, aesthetics, and user engagement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
