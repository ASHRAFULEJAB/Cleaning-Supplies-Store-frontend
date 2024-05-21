"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
const flashSales = [
  {
    _id: "1",
    productName: "Cleaning Spray",
    description: "A powerful cleaning spray for all surfaces.",
    price: 12.99,
    flashSale: true,
    creationTime: "2023-05-20T10:00:00Z",
    endTime: "2024-06-15T10:00:00Z", // how much day for flash sale
  },
  {
    _id: "2",
    productName: "Echo Friendly Soap",
    description: "Efficient soap for all floor types.",
    price: 15.99,
    flashSale: true,
    creationTime: "2023-05-20T12:00:00Z",
    endTime: "2024-06-12T12:00:00Z", // how much  day for flash sale
  },
  
];
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  // Find the earliest end time
  const earliestEndTime = new Date(
    Math.min(...flashSales.map((sale) => new Date(sale.endTime).getTime()))
  );

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = earliestEndTime.getTime() - now;

      if (distance < 0) {
        setTimeLeft("Sale ended");
        return;
      }

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [earliestEndTime]);

  const existFlashSale = flashSales.filter((sale) => sale.flashSale === true);
  const homePageFlashSales = existFlashSale.sort(
    (pre, nxt) =>
      new Date(nxt.creationTime).getTime() -
      new Date(pre.creationTime).getTime()
  );

  return (
    <div className=" lg:ml-[530px]">
      <h2 className="font-semibold text-gray-700 text-xl">Time left: </h2>
      <button
        className="mt-4 text-xl w-full text-white bg-[#282828] p-3 
      rounded-xl shadow-lg"
      >
        {timeLeft}
      </button>
    </div>
  );
};

export default Countdown;
