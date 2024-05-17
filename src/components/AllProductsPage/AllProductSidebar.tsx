"use client";

import CategoryList from "./CategoryList";

const AllProductSidebar = () => {
  return (
    <div className="mt-28 ml-6">
      <div className=" border border-gray-500 mb-2 p-3 ">
        <h1 className="mb-2">Price Range</h1>
        <label className="inline-flex items-center" htmlFor="redCheckBox">
          <input
            id="redCheckBox"
            type="checkbox"
            className="w-4 h-4 accent-red-600"
            defaultChecked
          />
          <span className="ml-2">$20.00 - $ 50.00</span>
        </label>{" "}
        <br />
        <label className="inline-flex items-center" htmlFor="tealCheckBox">
          <input
            id="tealCheckBox"
            type="checkbox"
            className="w-4 h-4 accent-teal-600"
            defaultChecked
          />
          <span className="ml-2">$20.00 - $ 50.00</span>
        </label>
        <br />
        <label className="inline-flex items-center" htmlFor="yellowCheckBox">
          <input
            id="yellowCheckBox"
            type="checkbox"
            className="w-4 h-4 accent-yellow-600"
            defaultChecked
          />
          <span className="ml-2">$20.00 - $ 50.00</span>
        </label>
        <label className="inline-flex items-center" htmlFor="grayCheckBox">
          <input
            id="grayCheckBox"
            type="checkbox"
            className="w-4 h-4 accent-gray-700"
            defaultChecked
          />
          <span className="ml-2">$20.00 - $ 50.00</span>
        </label>
        <label className="inline-flex items-center" htmlFor="indigoCheckBox">
          <input
            id="indigoCheckBox"
            type="checkbox"
            className="w-4 h-4 accent-indigo-700"
            defaultChecked
          />
          <span className="ml-2">$20.00 - $ 50.00</span>
        </label>
      </div>
      <CategoryList />
      {/* Rating */}
      <div className=" border border-gray-500 p-3  mt-3">
        <h1 className="mb-2">Ratings</h1>
        <label className="inline-flex items-center" htmlFor="redCheckBox">
          <input
            id="redCheckBox"
            type="checkbox"
            className="w-4 h-4 accent-red-600"
            defaultChecked
          />
          <span className="ml-2">1 Star</span>
        </label>{" "}
        <br />
        <label className="inline-flex items-center" htmlFor="tealCheckBox">
          <input
            id="tealCheckBox"
            type="checkbox"
            className="w-4 h-4 accent-teal-600"
            defaultChecked
          />
          <span className="ml-2">2 Star</span>
        </label>
        <br />
        <label className="inline-flex items-center" htmlFor="yellowCheckBox">
          <input
            id="yellowCheckBox"
            type="checkbox"
            className="w-4 h-4 accent-yellow-600"
            defaultChecked
          />
          <span className="ml-2">3 Star</span>
        </label>
        <br />
        <label className="inline-flex items-center" htmlFor="grayCheckBox">
          <input
            id="grayCheckBox"
            type="checkbox"
            className="w-4 h-4 accent-gray-700"
            defaultChecked
          />
          <span className="ml-2">4 Star</span>
        </label>
        <br />
        <label className="inline-flex items-center" htmlFor="indigoCheckBox">
          <input
            id="indigoCheckBox"
            type="checkbox"
            className="w-4 h-4 accent-indigo-700"
            defaultChecked
          />
          <span className="ml-2">5 Star</span>
        </label>
      </div>
    </div>
  );
};

export default AllProductSidebar;
