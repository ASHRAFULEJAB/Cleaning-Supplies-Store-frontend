export type TSale = {
  _id: string;
  productName: string;
  imageUrl: string;
  price: number;
  discountedPrice: number;
  creationTime: string;
  flashSale: boolean;
};

export type Product = {
  _id?: string;
  title: string;
  price: number;
  ratings: number;
  brand: string;
  category: string;
  description: string;
  image: string;
};

export type ProductCategory = {
  _id: string;
  category: string;
  imageUrl: string;
  ratings?: string;
  price?: string;
  products: Product[];
};

export type AllProductCardPage = {
  id: "";
  title: "";
  price: 0;
  ratings: 0;
  brand: "";
  category: "";
  description: "";
  image: "";
};

export type TrendingProduct = {
  _id: string;
  title: string;
  price: number;
  image: string;
  name?: string;
  ratings?: number;
  brand?: string;
  description?: string;
  category?: string;
};

export type DashProduct={
  imageUrl: string;
  category: string;
  price: number;
  ratings: number;
}