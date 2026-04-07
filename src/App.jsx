import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSec from "./Components/HeroSec";
import Navbar from "./Components/Navbar";
import ProductsSection from "./Components/ProductsSection";
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSec />
                <ProductsSection />
              </>
            }
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/ProductDetail/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
