import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page Grainger Store || Cleaing Supplies",
  description:
    "Grainger is a cleaing supplies store where anyone can find leaning supplies category such as Dishwashing Items, Laundry Products, Toilet Cleaners & Cleaning Accessories, Napkins & Paper Products, Pest Control Products, etc",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
