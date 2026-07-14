import { useState, useEffect } from "react";
import GridCard from "../GridCard/GridCard";
import "./ProductGrid.css";
function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/products`)
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.log(err));
  }, []);

  return (
  <div className="products-grid">
    {products.map((product) => (
      <GridCard
        key={product._id}
        _id={product._id}
        image={product.image}
        title={product.name}
        price={`$${product.price}`}
        oldPrice=""
        rating="4.5"
      />
    ))}
  </div>
 );
}

export default ProductGrid;