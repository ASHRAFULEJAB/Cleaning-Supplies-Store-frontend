import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/types";

type AllPageCardProps = {
  product: Product;
};

const AllProductPageCard: React.FC<AllPageCardProps> = ({ product }) => {
  const { _id, title, price, ratings, brand, category, description, image } =
    product;

  return (
    <div className="lg:mt-20 mb-3 mt-20">
      <div
        className="lg:max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg 
      transform hover:scale-105 transition duration-500"
      >
        <div className="relative h-64">
          <Image
            height={256}
            width={256}
            className="object-cover w-full h-full rounded-xl"
            src={image}
            alt={title}
          />
          <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            -13%
          </p>
        </div>
        <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">
          {title}
        </h1>
        <div className="my-4">
          <div className="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <p>1:34:23 Minutes</p>
          </div>
          <div className="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <p>{brand}</p>
          </div>
          <div className="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <p>
              <span className="text-gray-400 mr-2">$23</span> {price}
            </p>
          </div>
          <Link href={`/products/dishwashing-items/${_id}`}>
            <button className="mt-4 text-xl w-full text-white bg-[#00739E] py-2 rounded-xl shadow-lg">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProductPageCard;
