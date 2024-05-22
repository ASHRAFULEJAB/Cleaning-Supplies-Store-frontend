import Link from "next/link";
import { ProductCategory } from "../types/types";
import TopCategoriesCard from "./TopCategoriesCard";

const TopCategories = async () => {
  const res = await fetch(
    "https://cleaning-store-nextjs-assignment8-backend.vercel.app/products/dishwashing-items"
  );
  const topCategories: { data: ProductCategory[] } = await res.json();

  return (
    <div className="text-center">
      <div className="text-center">
        <h1 className="text-[36px] font-meduim">Top Categories</h1>
        <p className="text-wrap w-1/2 mx-auto mb-5">
          Discover our top categories, featuring a diverse range of products
          tailored to meet your needs. From the latest in tech and electronics
          to stylish home decor and essential kitchen gadgets, explore the best
          we have to offer and find exactly what you’re looking for.
        </p>
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-3 justify-center items-center mb-5 gap-2 lg:ml-0 ml-5">
        {topCategories?.data?.map((singleCategory) => (
          <TopCategoriesCard
            key={singleCategory?._id}
            singleCategory={singleCategory}
          />
        ))}
      </div>
      <Link href="/products">
        {" "}
        <button
          className=" w-[159px] h-[59px]  py-2 px-3 bg-[#282828] text-white font-bold 
                  rounded-full shadow-md hover:shadow-lg transition duration-300 text-center 
                  items-center mb-5"
        >
          View all
        </button>
      </Link>
    </div>
  );
};

export default TopCategories;
