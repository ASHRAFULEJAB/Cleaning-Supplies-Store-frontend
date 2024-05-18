"use client";

import Image from "next/image";
import Link from "next/link";

const HomeCarosulCard = () => {
  return (
    <>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg> */}
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:mx-40 ">
        <div className="absolute top-[600px] left-24 py-2 px-4  rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div className=" lg:flex justify-center items-center">
          <div className="container lg:flex justify-center">
            <div className="max-w-sm py-10">
              <div
                className="bg-white relative shadow-lg hover:shadow-xl
               transition duration-500 rounded-lg"
              >
                <Image
                  className="rounded-lg"
                  height={400}
                  width={400}
                  src="https://images.unsplash.com/photo-1647577746559-c9a28c0d0870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpc2h3YXNoaW5nfGVufDB8fDB8fHww"
                  alt=""
                />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                    Cascade Burst Dish Soap.
                  </h1>
                  <p className="text-gray-700 tracking-wide">
                    Keep your dishes sparkling clean with our citrus-scented
                    dish soap.
                  </p>
                  <Link href="/products">
                    <p className="hover:text-[#00739E] hover:font-bold">
                      <span className="text-gray-400 mr-2 hover:text-[#00739E]">
                        $230
                      </span>{" "}
                      $200
                    </p>
                  </Link>
                </div>
                <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <span className="text-md">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex justify-center items-center">
          <div className="container lg:flex justify-center">
            <div className="max-w-sm py-10">
              <div
                className="bg-white relative shadow-lg hover:shadow-xl
               transition duration-500 rounded-lg"
              >
                <Image
                  className="rounded-lg"
                  height={400}
                  width={400}
                  src="https://images.unsplash.com/photo-1594576182733-ad4ec76e674f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <h1
                    className="text-gray-700 font-bold text-2xl mb-3 
                  hover:text-gray-900 hover:cursor-pointer"
                  >
                    Luxurious Dish Towels.
                  </h1>
                  <p className="text-gray-700 tracking-wide">
                    Soft and absorbent dish towels for all your kitchen needs.
                  </p>
                  <Link href="/products">
                    <p className="hover:text-[#00739E] hover:font-bold">
                      <span className="text-gray-400 mr-2 hover:text-[#00739E]">
                        $299
                      </span>{" "}
                      $239
                    </p>
                  </Link>
                </div>
                <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <span className="text-md">25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex justify-center items-center">
          <div className="container lg:flex justify-center">
            <div className="max-w-sm py-10">
              <div
                className="bg-white relative shadow-lg hover:shadow-xl
               transition duration-500 rounded-lg"
              >
                <Image
                  className="rounded-lg"
                  height={400}
                  width={400}
                  src="https://plus.unsplash.com/premium_photo-1661509951311-bbf3ad7399a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFVsdGltYXRlJTIwRGlzaCUyMFNjcnViYmVyfGVufDB8fDB8fHww"
                  alt=""
                />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                    Ultimate Dish Scrubber.
                  </h1>
                  <p className="text-gray-700 tracking-wide">
                    Scrub away tough stains with our ergonomic and durable dish
                    brush.
                  </p>
                  <Link href="/products">
                    <p className="hover:text-[#00739E] hover:font-bold">
                      <span className="text-gray-400 mr-2 hover:text-[#00739E]">
                        $330
                      </span>{" "}
                      $300
                    </p>
                  </Link>
                </div>
                <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <span className="text-md">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[600px] right-24 py-2 px-4  rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default HomeCarosulCard;
