import { useState } from "react";
import "./AddProduct.css";

function AddProduct() {

  const [product, setProduct] = useState({
  name: "",
  price: "",
  category: "",
  image: "",
  description: "",
  });
  const handleChange = (e) => {
  setProduct({
    ...product,
    [e.target.name]: e.target.value,
   });
  };
   const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  const data = await response.json();
  console.log(data);
  alert("Product Added Successfully!");

  setProduct({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
   });
  };

  return (
    <div className="add-product-page">
      <h1>Add Product</h1>

      <form className="add-product-form" onSubmit={handleSubmit}>

        <input 
        name="name"
        type="text"
        placeholder="Product Name"   
        value={product.name}
        onChange={handleChange}
        />

        <input 
        name="price"
        type="number" 
        placeholder="Price" 
        value={product.price}
        onChange={handleChange} 
        />

        <input
        name="category"
        type="text" 
        placeholder="Category"  
        value={product.category}
        onChange={handleChange}
        />

        <input 
        name="image"
        type="text" 
        placeholder="Image URL" 
        value={product.image}
        onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Product Description"
          rows="5"
          value={product.description}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;