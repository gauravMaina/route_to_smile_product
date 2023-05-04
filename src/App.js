import Product from "./Components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import ProductModal from "./Components/ProductModal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/add-product" element={<ProductModal />} />
        <Route path="/edit-product" element={<ProductModal />} />
      </Routes>
    </BrowserRouter>
  );
}
