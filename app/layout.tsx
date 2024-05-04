import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LedgerBrew",
  description: "LedgerBrew is a simple accounting software built specifically for small businesses, freelancers and entrepreneurs to brew a perfect set of books",
  keywords: "client bookkeeping solutions, accounting software for small business, bookkeeping services, bookkeeping software for small business, bookkeeper near me, accounting programs for small business, accounting packages for small business, accounting platforms, book keepers, small company accounting software, double entry accounting, accounting and bookkeeping software, book keeping near me, accounting software software, double ledger accounting, small accounting software for small business" ,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
