import { makeAutoObservable, runInAction } from "mobx";
import { getData } from "../API/API";

export type TProducts = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  thumbnail: string;
  images: string[];
};

class ProductsStore {
  products: TProducts[] = [];
  isLoading = false;
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  UpdateProducts = async () => {
    try {
      this.isLoading = true;
      this.isError = false;
      const res = await getData();
      runInAction(() => {
        this.products = res;
        this.isLoading = false;
      });
    } catch {
      this.isError = true;
      this.isLoading = false;
    }
  };
}

export default new ProductsStore();
