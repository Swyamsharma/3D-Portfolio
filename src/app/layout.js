import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Swyam Sharma",
  description: "Swyam Sharma is a full stack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico"/>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <Script
        strategy="lazyOnload"
        async
      ></Script>
      <SmoothScroll />
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
