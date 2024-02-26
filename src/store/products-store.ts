import { makeAutoObservable, runInAction } from "mobx";
import { TProduct, getData } from "../api/API";

class ProductsStore {
  products: TProduct[] = [];
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
