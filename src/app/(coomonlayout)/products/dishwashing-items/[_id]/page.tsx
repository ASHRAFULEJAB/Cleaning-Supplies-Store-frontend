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
    // console.log("Fetched response:", response); // Log the full response

    // Assuming the response has a data property containing an array of products
    const products = response.data; // Adjust this line based on actual response structure

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

// export const generateStaticParams = async () => {
//   const res = await fetch("http://localhost:5000/products/dishwashing-items");
//   const products = await res.json();
//   return products.slice(0, 3).map((product: { id: any }) => ({
//     _id: product.id,
//   }));
// };
// export const generateStaticParams = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/products/dishwashing-items");

//     if (!res.ok) {
//       throw new Error(`Failed to fetch, status: ${res.status}`);
//     }

//     const products = await res.json();

//     if (!Array.isArray(products)) {
//       throw new Error("Fetched data is not an array");
//     }

//     console.log("Fetched products:", products);

//     return products.slice(0, 3).map((product: { id: any }) => ({
//       _id: product.id,
//     }));
//   } catch (error) {
//     console.error("Error in generateStaticParams:", error);
//     return [];
//   }
// };
const ProductDetails = async ({ params }: { params: Params }) => {
  // console.log(params);
  // implementing SSR
  const res = await fetch(
    `http://localhost:5000/products/dishwashing-items/${params._id}`,
    {
      cache: "no-store",
    }
  );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch product details");
  // }
  // console.log(res);
  const data = await res.json();
  const singleProduct = data.product;
  // console.log(product);
  return (
    <div>
      <ProductDetailsPage singleProduct={singleProduct} />
    </div>
  );
};

export default ProductDetails;
