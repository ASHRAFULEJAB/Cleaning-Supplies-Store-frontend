import Link from "next/link";

const TopCategoriesCard = ({ singleCategory }) => {
  const { category, imageUrl } = singleCategory;

  // Generate the dynamic URL based on the category name
  const url = `/products/dishwashing-items?category=${encodeURIComponent(
    category
  )}`;

  return (
    <Link href={url}>
      <div
        className="flex flex-col justify-between w-72 sm:w-96 h-full bg-white bg-center
             text-gray-800 shadow-md overflow-hidden cursor-pointer rounded-2xl"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="flex justify-between items-center ml-4 pr-8">
          <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
            {category}
          </div>
          <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">
            %
          </div>
        </div>
        <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
          <h3 className="text-xl font-bold pb-2">{category}</h3>
        </div>
      </div>
    </Link>
  );
};

export default TopCategoriesCard;
