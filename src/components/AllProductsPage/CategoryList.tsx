import React, { useState, useEffect } from "react";

const CategoryList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const targetElement = event.target as Element;
    if (!targetElement.closest(".dropdown-container")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="border border-gray-500 p-2">
      <h1 className="mb-2">Categories</h1>
      <div
        className="relative  dropdown-container"
        data-twe-dropdown-position="dropend"
      >
        <button
          className="flex items-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium 
          uppercase leading-normal text-black shadow-primary-3 transition duration-150 
          ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 
          focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 
          active:shadow-primary-2 motion-reduce:transition-none 
          shadow-black/30 
          
          hover:shadow-dark-strong 
          focus:shadow-dark-strong 
          active:shadow-dark-strong"
          type="button"
          id="dropdownMenuButton1e"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          Categories / Brands
          <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <ul
          className={`absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-red-500 bg-clip-padding text-base shadow-lg ${
            isOpen ? "block" : "hidden"
          } 
          bg-red-500`}
          aria-labelledby="dropdownMenuButton1e"
        >
          <li>
            <a
              className="block w-full whitespace-nowrap bg-red-500 px-4 py-2 text-sm font-normal  hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline 
              bg-surface-dark 
              text-black 
              "
              href="#"
            >
              Action
            </a>
          </li>
          <li>
            <a
              className="block w-full whitespace-nowrap bg-red-500 px-4 py-2 text-sm font-normal  hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline 
              bg-surface-dark 
              text-black 
              "
              href="#"
            >
              Another action
            </a>
          </li>
          <li>
            <a
              className="block w-full whitespace-nowrap bg-red-500 px-4 py-2 text-sm font-normal
                hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 
                active:no-underline 
              bg-surface-dark 
              text-black 
              "
              href="#"
            >
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
