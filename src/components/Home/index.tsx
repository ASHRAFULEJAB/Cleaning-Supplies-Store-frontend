"use client";
import { useState } from "react";
import TopCategories from "../TopCategories";
import TrendingProducts from "../TrendingProducts";
import FlashSale from "../flashSale";
import Container from "../ui/layout/Container";
import HomeCarosulCard from "./HomeCarosulCard";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              "url('https://plus.unsplash.com/premium_photo-1683140812184-f6fb14f2a531?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
            </div>
          </div>
        </div>
      </header>

      <Container>
        <FlashSale />
        <TopCategories />
        <TrendingProducts />
      </Container>
    </div>
  );
};

export default HomePage;
