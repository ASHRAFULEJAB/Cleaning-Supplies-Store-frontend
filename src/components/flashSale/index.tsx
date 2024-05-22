import Link from "next/link";
import FlashSaleCard from "./FlashSaleCard";
import { TSale } from "../types/types";

const FlashSale = async () => {
  // implementing ISR

  const res = await fetch(
    "https://cleaning-store-nextjs-assignment8-backend.vercel.app/flash-sale",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const flashSales = await res.json();

  if (flashSales.data) {
    const existFlashSale = flashSales.data.filter(
      (sale: TSale) => sale.flashSale === true
    );
    const homePageFlashSales = existFlashSale
      .sort(
        (pre: TSale, nxt: TSale) =>
          new Date(nxt.creationTime).getTime() -
          new Date(pre.creationTime).getTime()
      )
      .slice(0, 4);

    return (
      <div className="mb-5">
        <div className="min-h-screen bg-transparent  justify-center items-center py-20">
          <div className="mb-5 flex justify-between items-center">
            <h1 className="text-[36px] font-meduim">Flash Sale</h1>
            <Link href="/flash-sale">
              <button
                className=" w-[159px] h-[59px]  py-2 px-3 bg-[#282828] text-white font-bold 
                  rounded-full shadow-md hover:shadow-lg transition duration-300"
              >
                View all
              </button>
            </Link>
          </div>
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
            {homePageFlashSales?.map((sale: TSale) => (
              <FlashSaleCard key={sale._id} sale={sale} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default FlashSale;
