"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AllProductsPage from "../AllProductsPage";
import AllProductPageCard from "../AllProductsPage/AllProductPageCard";

const DishwashingItemsPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (category) {
          console.log("Fetching products for name:", category); // Debug log
          const response = await fetch(
            `http://localhost:5000/products/dishwashing-items?category=${encodeURIComponent(
              category
            )}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          const data = await response.json();
          console.log("Fetched data:", data); // Debug log
          setProducts(data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [name]);

  return (
    <div>
      <h1>Dishwashing Items</h1>
      {/* {name && <h2>Category: {name}</h2>} */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {products.map((productCategory) =>
          productCategory.products.map((product) => (
            <AllProductPageCard key={product?.title} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default DishwashingItemsPage;
