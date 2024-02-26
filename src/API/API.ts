import axios from "axios";

export type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  thumbnail: string;
  images: string[];
};

export const getData = async () => {
  const response = await axios.get<{ products: TProduct[] }>(
    "https://dummyjson.com/products"
  );
  return response.data.products;
};
