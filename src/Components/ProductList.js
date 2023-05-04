import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProductList = async () => {
    const { data: response } = await axios.get(
      "https://dummyjson.com/products"
    );
    setProducts(response?.products);
  };
  useEffect(() => {
    getProductList();
  }, []);
  const deleteProduct = (item) => {
    const filter = products.filter((e) => e.id !== item.id);
    setProducts(filter);
  };
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Thumbnail</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Discount Percentage</th>
          <th scope="col">Rating</th>
          <th scope="col">Stock</th>
          <th scope="col">Brand</th>
          <th scope="col">Category</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.title}</td>
            <td>
              <img
                src={item?.thumbnail}
                alt="thumbnail"
                className="img-thumbnail"
              />
            </td>
            <td>{item?.description}</td>
            <td>{item?.price}</td>
            <td>{item?.discountPercentage}</td>
            <td>{item?.rating}</td>
            <td>{item?.stock}</td>
            <td>{item?.brand}</td>
            <td>{item?.category}</td>
            <td className="d-flex justify-content-between">
              {" "}
              <NavLink
                className="btn btn-primary"
                to="/edit-product"
                state={{ item }}
              >
                Edit Product
              </NavLink>
              <button
                className="text-danger btn"
                onClick={() => deleteProduct(item)}
              >
                {" "}
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ProductList;
