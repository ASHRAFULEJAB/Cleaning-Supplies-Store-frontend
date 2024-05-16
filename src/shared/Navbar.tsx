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
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        className={`bg-transparent shadow flex fixed z-[999] w-full ${
          scrolling ? "bg-[#1b2329]" : "" // Add class "bg-dark" when scrolling
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
                  href="/"
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform 
                  rounded-md lg:mt-0 text-white "
                >
                  Categories
                </Link>
                <Link
                  href="/"
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 text-white "
                >
                  Products
                </Link>
                <Link
                  href="/"
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 text-white "
                >
                  Flash Sale
                </Link>
                <Link
                  href="/"
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 text-white "
                >
                  About Us
                </Link>
                <Link
                  href="/"
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 text-white "
                >
                  Contact Us
                </Link>
              </div>

              {/* <div className="flex items-center mt-4 lg:mt-0">
                <button
                  className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-white hover: dark:hover:text-gray-400 focus: dark:focus:text-gray-400 focus:outline-none"
                  aria-label="show notifications"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>
                  <h3 className="mx-2  dark:text-white lg:hidden">
                    Khatab wedaa
                  </h3>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
