import ProductList from "./ProductList";
import { NavLink } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <NavLink className="btn btn-primary" to="/add-product">
          Add Product
        </NavLink>
      </div>
      <ProductList />
    </>
  );
};

export default Product;
