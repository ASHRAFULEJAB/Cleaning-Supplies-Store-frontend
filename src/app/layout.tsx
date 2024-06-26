import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grainger Store || Cleaing Supplies",
  description:
    "Grainger is a cleaing supplies store where anyone can find leaning supplies category such as Dishwashing Items, Laundry Products, Toilet Cleaners & Cleaning Accessories, Napkins & Paper Products, Pest Control Products, etc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
