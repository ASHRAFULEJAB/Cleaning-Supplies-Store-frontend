import ProductDetailsPage from "@/components/ProductDetails";
interface Params {
  _id: string;
}
// implementing SSG
export const generateStaticParams = async () => {
  try {
    const res = await fetch("http://localhost:5000/products/dishwashing-items");

    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`);
    }

    const response = await res.json();

    const products = response.data;

    if (!Array.isArray(products)) {
      throw new Error("Fetched data is not an array");
    }

    return products.slice(0, 10).map((product) => ({
      _id: product._id,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
};

const ProductDetails = async ({ params }: { params: Params }) => {
  // implementing SSR
  const res = await fetch(
    `http://localhost:5000/products/dishwashing-items/${params._id}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  const singleProduct = data.product;

  return (
    <div>
      <ProductDetailsPage singleProduct={singleProduct} />
    </div>
  );
};

export default ProductDetails;
