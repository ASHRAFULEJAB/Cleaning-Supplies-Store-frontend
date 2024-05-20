"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const categories = [
  {
    _id: "664a27fdea7a5b39fd0b5d0f",
    name: "Dish Brush",
    price: 5.99,
    rating: 4.5,
    brand: "Brand A",
  },
  {
    _id: "664a27fdea7a5b39fd0b5d11",
    name: "Dish Drying Rack",
    price: 15.99,
    rating: 4.0,
    brand: "Brand B",
  },
  {
    _id: "664a27fdea7a5b39fd0b5d12",
    name: "Dish Scrubber",
    price: 3.99,
    rating: 4.3,
    brand: "Brand C",
  },
  {
    _id: "664a27fdea7a5b39fd0b5d0d",
    name: "Dish Soap",
    price: 2.99,
    rating: 4.7,
    brand: "Brand D",
  },
  {
    _id: "664a27fdea7a5b39fd0b5d10",
    name: "Dish Towels",
    price: 7.99,
    rating: 4.2,
    brand: "Brand E",
  },
  {
    _id: "664a27fdea7a5b39fd0b5d0e",
    name: "Dishwasher Detergent",
    price: 12.99,
    rating: 4.8,
    brand: "Brand F",
  },
];
const AllProductSidebar = () => {
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const router = useRouter();

  const handleFilter = () => {
    const params = new URLSearchParams();
    if (category) params.append("category", category);
    if (rating) params.append("rating", rating);
    if (brand) params.append("brand", brand);
    if (priceRange) params.append("priceRange", priceRange);
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
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select a rating</option>
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} stars & up
            </option>
          ))}
        </select>
      </div>
      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Brand</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select a brand</option>
          {uniqueBrands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div> */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Price Range
        </label>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select a price range</option>
          <option value="0-5">$0 - $5</option>
          <option value="5-10">$5 - $10</option>
          <option value="10-20">$10 - $20</option>
          <option value="20-50">$20 - $50</option>
          <option value="50+">$50+</option>
        </select>
      </div>
      <button
        onClick={handleFilter}
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default AllProductSidebar;

// import CategoryList from "./CategoryList";

// const AllProductSidebar = () => {
//   return (
//     <div className="mt-28 ml-6">
//       <div className=" border border-gray-500 mb-2 p-3 ">
//         <h1 className="mb-2">Price Range</h1>
//         <label className="inline-flex items-center" htmlFor="redCheckBox">
//           <input
//             id="redCheckBox"
//             type="checkbox"
//             className="w-4 h-4 accent-red-600"
//             defaultChecked
//           />
//           <span className="ml-2">$20.00 - $ 50.00</span>
//         </label>{" "}
//         <br />
//         <label className="inline-flex items-center" htmlFor="tealCheckBox">
//           <input
//             id="tealCheckBox"
//             type="checkbox"
//             className="w-4 h-4 accent-teal-600"
//             defaultChecked
//           />
//           <span className="ml-2">$20.00 - $ 50.00</span>
//         </label>
//         <br />
//         <label className="inline-flex items-center" htmlFor="yellowCheckBox">
//           <input
//             id="yellowCheckBox"
//             type="checkbox"
//             className="w-4 h-4 accent-yellow-600"
//             defaultChecked
//           />
//           <span className="ml-2">$20.00 - $ 50.00</span>
//         </label> <br />
//         <label className="inline-flex items-center" htmlFor="grayCheckBox">
//           <input
//             id="grayCheckBox"
//             type="checkbox"
//             className="w-4 h-4 accent-gray-700"
//             defaultChecked
//           />
//           <span className="ml-2">$20.00 - $ 50.00</span>
//         </label>
//         <label className="inline-flex items-center" htmlFor="indigoCheckBox">
//           <input
//             id="indigoCheckBox"
//             type="checkbox"
//             className="w-4 h-4 accent-indigo-700"
//             defaultChecked
//           />
//           <span className="ml-2">$20.00 - $ 50.00</span>
//         </label>
//       </div>
//       <CategoryList />
//       {/* Rating */}
//       <div className=" border border-gray-500 p-3  mt-3">
//         <h1 className="mb-2">Ratings</h1>
//         <label className="inline-flex items-center" htmlFor="redCheckBox">
//           <input
//             id="redCheckBox"
//             type="checkbox"
//             className="w-4 h-4 accent-red-600"
//             defaultChecked
//           />
//           <span className="ml-2">1 Star</span>
//         </label>{" "}
//         <br />
//         <label className="inline-flex items-center" htmlFor="tealCheckBox">
//           <input
//             id="tealCheckBox"
//             type="checkbox"
//             className="w-4 h-4 accent-teal-600"
//             defaultChecked
//           />
//           <span className="ml-2">2 Star</span>
//         </label>
//         <br />
//         <label className="inline-flex items-center" htmlFor="yellowCheckBox">
//           <input
//             id="yellowCheckBox"
//             type="checkbox"
//             className="w-4 h-4 accent-yellow-600"
//             defaultChecked
//           />
//           <span className="ml-2">3 Star</span>
//         </label>
//         <br />
//         <label className="inline-flex items-center" htmlFor="grayCheckBox">
//           <input
//             id="grayCheckBox"
//             type="checkbox"
//             className="w-4 h-4 accent-gray-700"
//             defaultChecked
//           />
//           <span className="ml-2">4 Star</span>
//         </label>
//         <br />
//         <label className="inline-flex items-center" htmlFor="indigoCheckBox">
//           <input
//             id="indigoCheckBox"
//             type="checkbox"
//             className="w-4 h-4 accent-indigo-700"
//             defaultChecked
//           />
//           <span className="ml-2">5 Star</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default AllProductSidebar;
