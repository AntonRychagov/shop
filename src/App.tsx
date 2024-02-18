import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shop/" element={<ProductList />} />
        <Route path="/shop/productDetails/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
