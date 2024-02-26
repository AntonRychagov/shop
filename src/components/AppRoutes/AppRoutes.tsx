import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import ProductDetails from "../ProductDetails/ProductDetails";



const AppRoutes = () => {
    return (
        <BrowserRouter>
      <Routes>
        <Route path="/shop/" element={<ProductList />} />
        <Route path="/shop/productDetails/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes