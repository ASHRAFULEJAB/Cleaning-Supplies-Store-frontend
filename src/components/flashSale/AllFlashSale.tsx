import { TSale } from "../types/types";
import Countdown from "../utils/Countdown";
import FlashSaleCard from "./FlashSaleCard";

const AllFlashSale = async () => {
  // implementing SSR
  const res = await fetch("http://localhost:5000/flash-sale", {
    cache: "no-store",
  });
  const flashSales = await res.json();
  // console.log(flashSales);
  if (flashSales.data) {
    const existFlashSale = flashSales.data.filter(
      (sale: TSale) => sale.flashSale === true
    );
    const homePageFlashSales = existFlashSale.sort(
      (pre: TSale, nxt: TSale) =>
        new Date(nxt.creationTime).getTime() -
        new Date(pre.creationTime).getTime()
    );

    return (
      <div className="mb-5 mx-28 ">
        <div className="min-h-screen bg-transparent  justify-center items-center py-20">
          <div className="lg:flex items-center justify-betweeen">
            <div className="mb-5  justify-between items-center">
              <h1 className="text-[36px] font-meduim">Flash Sale</h1>
              <h2 className="font-semibold">Showing 1–12 of 24 item(s)</h2>
              <p className="text-wrap ">
                Antislip tape has a gritted surface to prevent slips and falls
                on stair treads, <br />ramps, and flooring. It is backed with a
                pressure-sensitive adhesive to secure <br />the tape to the substrate.
                Tape can be cut to any length to fit the application.
              </p>
              {/*  */}
            </div>
            <Countdown />
          </div>
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
            {homePageFlashSales?.map((sale: TSale) => (
              <FlashSaleCard key={sale._id} sale={sale} />
            ))}
          </div>
        </div>

        <div className="">
          <div className="flex flex-col lg:ml-[520px] text-center lg:flex-row items-center space-x-2 text-xs">
            {" "}
            <button className="py-2 px-4 bg-white text-gray-600 font-medium rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
              {" "}
              10 items{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />{" "}
              </svg>{" "}
            </button>{" "}
            <p className="text-gray-500 mt-4 lg:mt-0">
              Showing 11 to 20 of 95 entires
            </p>{" "}
          </div>
          <div className="w-full border-t border-gray-200 font-mono mt-1">
            <nav className="pagination flex flex-wrap justify-center text-gray-700 -mt-px">
              <span className="p-2 mx-1 current text-gray-800 border-t border-black">
                1
              </span>
              <a
                className="p-2 mx-1 border-t border-transparent hover:border-gray-700"
                href="/page/2/"
              >
                2
              </a>
              <span className="p-2 mx-1">...</span>
              <a
                className="p-2 mx-1 border-t border-transparent hover:border-gray-700"
                href="/page/84/"
              >
                84
              </a>
              <a className="p-2 mx-1" href="/page/2/">
                &#8702;
              </a>
            </nav>
          </div>
        </div>

        <button
          className=" w-[159px] h-[59px] lg:ml-[580px]  py-2 px-3 bg-[#282828] text-white font-bold 
                  rounded-full shadow-md hover:shadow-lg transition duration-300"
        >
          Load More
        </button>
      </div>
    );
  }
  return null;
};

export default AllFlashSale;
