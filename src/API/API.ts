import axios from "axios";

export const getData = async () =>
  (await axios.get("https://dummyjson.com/products")).data.products;
