import "./Products.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

   useEffect(() => {
   fetchProducts();
   }, []);

  const fetchProducts = async () => {
  const response = await fetch("http://localhost:5000/api/products");
  const data = await response.json();
  setProducts(data);
  };

  const handleDelete = async (id) => {
  await fetch(`http://localhost:5000/api/products/${id}`, {
    method: "DELETE",
  });

  fetchProducts();
  };

  return (
    <div className="products-page">
      <h1>Products</h1>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
            {products.map((product) => (
    <tr key={product._id}>
      <td>
        <img src={product.image} alt={product.name} />
      </td>

      <td>{product.name}</td>
      <td>${product.price}</td>
      <td>{product.category}</td>

      <td>
        <button   onClick={() =>
         navigate(`/admin/edit-product/${product._id}`)
          }
        >Edit</button>

        <button onClick={() => handleDelete(product._id)}>
          Delete
        </button>
      </td>
    </tr>
  ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;