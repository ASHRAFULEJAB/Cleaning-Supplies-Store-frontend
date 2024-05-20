import ProductDetailsPage from "@/components/ProductDetails";
interface Params {
  _id: string;
}

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
