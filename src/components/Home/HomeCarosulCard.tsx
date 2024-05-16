"use client";

import Image from "next/image";

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
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <Image
                  className="rounded-lg"
                  height={400}
                  width={400}
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                  alt=""
                />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                    Im supper dog for you.
                  </h1>
                  <p className="text-gray-700 tracking-wide">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eum, labore. Ea debitis beatae sequi deleniti.
                  </p>
                  <p>
                    <span className="text-gray-400 mr-2">$230</span> $200
                  </p>
                  <button
                    className="mt-6 py-2 px-4 bg-[#00739E] text-white font-bold 
                  rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    Buy Now
                  </button>
                </div>
                <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <span className="text-md">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <div className="container flex justify-center">
            <div className="max-w-sm py-10">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <Image
                  className="rounded-lg"
                  height={400}
                  width={400}
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                  alt=""
                />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                    Im supper dog for you.
                  </h1>
                  <p className="text-gray-700 tracking-wide">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eum, labore. Ea debitis beatae sequi deleniti.
                  </p>
                  <p>
                    <span className="text-gray-400 mr-2">$230</span> $200
                  </p>
                  <button
                    className="mt-6 py-2 px-4 bg-[#00739E] text-white font-bold 
                  rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    Buy Now
                  </button>
                </div>
                <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <span className="text-md">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <div className="container flex justify-center">
            <div className="max-w-sm py-5">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <Image
                  className="rounded-lg"
                  height={400}
                  width={400}
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                  alt=""
                />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                    Im supper dog for you.
                  </h1>
                  <p className="text-gray-700 tracking-wide">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eum, labore. Ea debitis beatae sequi deleniti.
                  </p>
                  <p>
                    <span className="text-gray-400 mr-2">$230</span> $200
                  </p>
                  <button
                    className="mt-6 py-2 px-4 bg-[#00739E] text-white font-bold 
                  rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    Buy Now
                  </button>
                </div>
                <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <span className="text-md">15%</span>
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
