import Image from "next/image";
import { ProductCategory } from "../types/types";
interface DashboardTableProps {
  dashProduct: ProductCategory;
}

const DashboardTable: React.FC<DashboardTableProps> = ({ dashProduct }) => {
  const { imageUrl, category, price, ratings } = dashProduct;
  return (
    <>
      <tr>
        <td
          className="px-4 py-4 text-sm font-medium text-gray-700 
                      whitespace-nowrap"
        >
          <div className="inline-flex items-center gap-x-3">
            <input
              type="checkbox"
              className="text-blue-500 border-gray-300 rounded 
                            bg-gray-900 
                            ring-offset-gray-900 
                            "
            />

            <span>#3066</span>
          </div>
        </td>
        <td
          className="px-4 py-4 text-sm 

                      text-gray-700 whitespace-nowrap"
        >
          Jan 6, 2024
        </td>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 
                        "
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3L4.5 8.5L2 6"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h2 className="text-sm font-normal">Paid</h2>
          </div>
        </td>
        <td
          className="px-4 py-4 text-sm 

                      text-gray-700 whitespace-nowrap"
        >
          <div className="flex items-center gap-x-2">
            <Image
              className="object-cover w-8 h-8 rounded-full"
              src={imageUrl}
              height={200}
              width={200}
              alt=""
            />
            <div>
              <h2
                className="text-sm font-medium text-gray-800 
                             "
              >
                {category}
              </h2>
              <p
                className="text-xs font-normal text-gray-600 
                            "
              >
                ratings:{ratings}
              </p>
            </div>
          </div>
        </td>
        <td
          className="px-4 py-4 text-sm 

                      text-gray-700 whitespace-nowrap"
        >
          ${price}
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-6">
            <button
              className="
                           transition-colors duration-200 
                        
                          text-gray-700 hover:text-yellow-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>

            <button
              className="text-red-700 transition-colors duration-200 hover:text-red-800
             focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default DashboardTable;
