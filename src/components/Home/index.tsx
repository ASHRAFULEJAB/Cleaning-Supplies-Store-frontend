"use client";
import Container from "../ui/layout/Container";
import heroImage from "../..//assets/heroimage1.png";
import { useState } from "react";
import HomeCarosulCard from "./HomeCarosulCard";
import FlashSale from "../flashSale";
import TopCategories from "../TopCategories";
import MostPopularProducts from "../MostPopularProducts";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Event handler function to toggle isOpen state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header>
        <div
          className="w-full bg-center bg-cover h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
          }}
        >
          <div className="flex items-center   justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1
                className="text-3xl font-semibold text-white lg:text-4xl mt-20 text-wrap w-1/2
               mx-auto text-center "
              >
                Supplies and Solutions for Every{" "}
                <span className="text-blue-400"> Household!</span>
              </h1>
              <p className="text-white text-center text-wrap mx-auto w-1/2 mt-3">
                Grainger is America’s trusted source for MRO supplies and
                industrial products. For over 90 years, we’ve built a tradition
                of getting customers the products and services they need.
                Grainger offers over a million products from thousands of
                trusted MRO suppliers
              </p>
              <HomeCarosulCard />
              {/* <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Start project
              </button> */}
            </div>
          </div>
        </div>
      </header>

      <Container>
        <FlashSale />
        <TopCategories />
        <MostPopularProducts />
      </Container>
    </div>
  );
};

export default HomePage;
