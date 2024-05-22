"use client";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        // Change 50 to the scroll position where you want the background color to change
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    console.log("cilcked");
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        className={`bg-[#1b2329f1] shadow flex fixed z-[999] w-full ${
          scrolling ? "bg-[#1b2329f1]" : "" // Add class "bg-dark" when scrolling
        }`}
      >
        <div
          className="container  py-4  w-full max-w-[1230px] 
         px-[20px] mx-auto text-white"
        >
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image src={logo} height={120} width={120} alt="loog" />
              </Link>
              <div className="flex lg:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-white  focus:outline-none"
                  aria-label="toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out
               bg-[#21292F]
               lg:mt-0 lg:p-0 text-white lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                 isOpen
                   ? "translate-x-0 opacity-100"
                   : "opacity-0 -translate-x-full"
               }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <Link
                  href="/"
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 text-white "
                >
                  Home
                </Link>

                <Link
                  href="/products"
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 text-white "
                >
                  Categories
                </Link>
                <Link
                  href="/flash-sale"
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 text-white "
                >
                  Flash Sale
                </Link>

                <Link
                  href="/dashboard/all-products"
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 text-white "
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
