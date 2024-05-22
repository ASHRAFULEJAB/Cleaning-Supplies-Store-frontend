import DashboardHomePage from "@/components/dashboard";
import { ProductCategory } from "@/components/types/types";

const Dashboard = async () => {
  // implementing SSR
  const res = await fetch(
    "https://cleaning-store-nextjs-assignment8-backend.vercel.app/products/dishwashing-items",
    {
      cache: "no-store",
    }
  );
  const dashboardProducts: { data: ProductCategory[] } = await res.json();
  return (
    <div>
      <DashboardHomePage dashboardProducts={dashboardProducts} />
    </div>
  );
};

export default Dashboard;
