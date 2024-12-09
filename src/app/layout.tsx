import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "SaaS Website UI Kit",
  description: "SaaS Website UI Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm.variable} ${dm.className} antialiased bg-[#EAEEFE]`}
      >
        {children}
      </body>
    </html>
  );
}
