import Link from "next/link";
import { TrendingProduct } from "../types/types";
import TredningProductCard from "./TredningProductCard";

const TrendingProducts = async () => {
  const res = await fetch(
    "https://cleaning-store-nextjs-assignment8-backend.vercel.app/trending-products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const trendingProducts = await res.json();

  const alltrendingProduct: TrendingProduct[] = trendingProducts.data;
  return (
    <div className="mb-5">
      <div className="min-h-screen bg-transparent  justify-center items-center py-20">
        <div className="mb-5 lg:flex justify-between items-center">
          <div className="block">
            <h1 className="text-[36px] font-meduim">Trending Products</h1>
            <p className="text-wrap mx-auto">
              Discover our top-rated cleaning supplies, carefully curated to
              meet your needs. <br /> From eco-friendly dish soaps to powerful
              surface cleaners, our trending products <br /> are designed to
              make cleaning effortless and effective. Dive into our selection
              and
              <br /> find the perfect solution for every cleaning task.
              <br /> Elevate your cleaning routine today with our
              premium-quality products!
            </p>
          </div>
          <Link href="/products">
            <button
              className=" w-[159px] h-[59px]  py-2 px-3 bg-[#282828] text-white font-bold 
                  rounded-full shadow-md hover:shadow-lg transition duration-300"
            >
              View all
            </button>
          </Link>
        </div>
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {alltrendingProduct.map((trendProduct) => (
            <TredningProductCard
              key={trendProduct?._id}
              trendProduct={trendProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
