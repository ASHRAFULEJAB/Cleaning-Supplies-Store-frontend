"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
  {
    _id: "664a27fdea7a5b39fd0b5d0f",
    name: "Dish Brush",
    price: 5.99,
    ratings: 4.5,
    brand: "Brand A",
  },
  {
    _id: "664a27fdea7a5b39fd0b5d11",
    name: "Dish Drying Rack",
    price: 15.99,
    ratings: 4.1,
    brand: "Brand B",
  },
  {
    _id: "664a27fdea7a5b39fd0b5d12",
    name: "Dish Scrubber",
    price: 3.99,
    ratings: 4.3,
    brand: "Brand C",
  },
  {
    _id: "664a27fdea7a5b39fd0b5d0d",
    name: "Dish Soap",
    price: 2.99,
    ratings: 4.7,
    brand: "Brand D",
  },
  {
    _id: "664a27fdea7a5b39fd0b5d10",
    name: "Dish Towels",
    price: 7.99,
    ratings: 4.2,
    brand: "Brand E",
  },
  {
    _id: "664a27fdea7a5b39fd0b5d0e",
    name: "Dishwasher Detergent",
    price: 12.99,
    ratings: 3.6,
    brand: "Brand F",
  },
];

const AllProductSidebar = () => {
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const handleFilter = () => {
    const params = new URLSearchParams();
    if (category) params.append("category", category);
    if (ratings) params.append("ratings", ratings);
    if (price) params.append("price", price);
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="w-1/4 p-4 mt-16">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Rating
        </label>
        <select
          value={ratings}
          onChange={(e) => setRatings(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select a rating</option>
          {categories.map((r) => (
            <option key={r._id} value={r.ratings}>
              {r.ratings}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Price Range
        </label>
        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select a price range</option>
          {categories.map((range) => (
            <option key={range._id} value={range.price}>
              {range.price}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleFilter}
        className="w-full py-2 px-4 bg-[#282828] text-white font-semibold rounded
         hover:bg-[#282828] transition duration-200"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default AllProductSidebar;
