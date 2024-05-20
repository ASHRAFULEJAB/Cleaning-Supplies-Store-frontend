"use client";
import { useSearchParams } from "next/navigation";
import { ProductCategory } from "../types/types";
import AllProductSidebar from "./AllProductSidebar";
import ProductAllCard from "./ProductAllCard";
import { useEffect, useState } from "react";

const AllProductsPage = () => {
  // implementing SSR
  // const res = await fetch("http://localhost:5000/products/dishwashing-items", {
  //   cache: "no-store",
  // });
  // const allProducts: { data: ProductCategory[] } = await res.json();
  // // console.log(allProducts);

  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const rating = searchParams.get("rating");
  const brand = searchParams.get("brand");
  const priceRange = searchParams.get("priceRange");

  const [products, setProducts] = useState<ProductCategory[]>([]);
  const allProducts = products;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = new URL("http://localhost:5000/products/dishwashing-items");
        if (category) url.searchParams.append("category", category);
        if (rating) url.searchParams.append("rating", rating);
        if (brand) url.searchParams.append("brand", brand);
        if (priceRange) url.searchParams.append("priceRange", priceRange);

        const response = await fetch(url.toString(), {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category, rating, brand, priceRange]);
  return (
    <div className="lg:flex">
      {" "}
      <AllProductSidebar />
      <div className="mb-5 mx-20 ">
        <div className="min-h-screen bg-transparent  justify-center items-center py-20">
          <div className="mb-5  justify-between items-center">
            <h1 className="text-[36px] font-meduim">
              Our Collection Of Products
            </h1>
            <h2 className="font-semibold">Showing 1–12 of 24 item(s)</h2>
            <p className="text-wrap w-1/2">
              Antislip tape has a gritted surface to prevent slips and falls on
              stair treads, ramps, and flooring. It is backed with a
              pressure-sensitive adhesive to secure the tape .
            </p>
            {/*  */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16 ml-16 ">
            {allProducts?.map((singleProduct) => (
              <ProductAllCard
                key={singleProduct?._id}
                singleProduct={singleProduct}
              />
            ))}
          </div>
        </div>

        <div className="">
          <div className="flex flex-col lg:ml-[370px] text-center lg:flex-row items-center space-x-2 text-xs">
            {" "}
            <button className="py-2 px-4 bg-white text-gray-600 font-medium rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
              {" "}
              10 items{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />{" "}
              </svg>{" "}
            </button>{" "}
            <p className="text-gray-500 mt-4 lg:mt-0">
              Showing 11 to 20 of 95 entires
            </p>{" "}
          </div>
          <div className="w-full border-t border-gray-200 font-mono mt-1">
            <nav className="pagination flex flex-wrap justify-center text-gray-700 -mt-px">
              <span className="p-2 mx-1 current text-gray-800 border-t border-black">
                1
              </span>
              <a
                className="p-2 mx-1 border-t border-transparent hover:border-gray-700"
                href="/page/2/"
              >
                2
              </a>
              <span className="p-2 mx-1">...</span>
              <a
                className="p-2 mx-1 border-t border-transparent hover:border-gray-700"
                href="/page/84/"
              >
                84
              </a>
              <a className="p-2 mx-1" href="/page/2/">
                &#8702;
              </a>
            </nav>
          </div>
        </div>

        <button
          className=" w-[159px] h-[59px] lg:ml-[430px]  py-2 px-3 bg-[#282828] text-white font-bold 
                  rounded-full shadow-md hover:shadow-lg transition duration-300"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllProductsPage;
