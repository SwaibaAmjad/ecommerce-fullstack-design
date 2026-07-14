import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ProductList(){
   const [products, setProducts] = useState([]);

   const location = useLocation();
   const search = new URLSearchParams(
   location.search
   ).get("search");
    console.log(products);
    console.log(products.length);
    useEffect(() => {
    let url =`${import.meta.env.VITE_API_URL}/api/products`;

    if (search) {
    url = `${import.meta.env.VITE_API_URL}/api/products/search?q=${search}`;
    }

    fetch(url)
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.log(err));
    }, [search]);

    console.log("Rendering products:", products);
    return(

     <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          _id={product._id}
          image={product.image}
          title={product.name}
          price={product.price}
          oldPrice="$1128.00"
          rating="4.5"
          orders="154 orders"
          shipping="Free Shipping"
          description={product.description}
        />
      ))}
    </div>

    );
}
export default ProductList;