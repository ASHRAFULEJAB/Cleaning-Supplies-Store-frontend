import DashboardHomePage from "@/components/dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Grainger Dashboard || Cleaing Supplies",
  description:
    "Grainger is a cleaing supplies store where anyone can find leaning supplies category such as Dishwashing Items, Laundry Products, Toilet Cleaners & Cleaning Accessories, Napkins & Paper Products, Pest Control Products, etc",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
