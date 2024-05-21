"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AllProductPageCard from "../AllProductsPage/AllProductPageCard";
import { ProductCategory } from "../types/types";

const DishwashingItemsPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [products, setProducts] = useState<ProductCategory[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (category) {
          const response = await fetch(
            `http://localhost:5000/products/dishwashing-items?category=${encodeURIComponent(
              category
            )}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          const data = await response.json();

          setProducts(data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="lg:flex mr-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16 ml-16 lg:mx-auto">
        {products.map((productCategory) =>
          productCategory.products.map((product) => (
            <>
              <AllProductPageCard key={product?.title} product={product} />
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default DishwashingItemsPage;
