import { MdOutlineMessage } from "react-icons/md";
import "./ProductInfo.css";
import { FaStar, FaRegStar, FaStarHalfAlt, FaCircle } from "react-icons/fa";
import { IoBasketOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProductInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;
  if (!product) {
  return <h2>Product not found</h2>;
  }
  console.log("Location State:", location.state);
  console.log("Product:", product);
  console.log(product);
  const addToCart = async () => {
  try {
    await fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: product?._id,
        name: product?.title,
        price: product?.price,
        image: product?.image,
        quantity: 1,
      }),
    });

    alert("Added to Cart!");
    navigate("/cart");
    } catch (error) {
    console.log(error);
    }
  };
  
  return (
    <div className="product-info">
       <div className="instock"><p>✔ In Stock</p></div>
      <h2 className="title">{product?.title}</h2>
      <div className="rating">
        <span className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </span>
        <span className="count-rating">9.3</span>
        <FaCircle className="dot" />
        <MdOutlineMessage className="icons" />
        <span className="reviews-orders">  32 reviews</span>
        <FaCircle className="dot" />
        <IoBasketOutline className="icons" />
        <span className="reviews-orders">  154 sold</span>
      </div>

      <div className="price-section">

       <div className="price-box active">
       <h3>{product?.price}</h3>
       <p>50-100 pcs</p>
       </div>

       <div className="price-box">
        <h3>$90.00</h3>
        <p>100-700 pcs</p>
        </div>

       <div className="price-box">
        <h3>$78.00</h3>
        <p>700+ pcs</p>
       </div>
       

      </div>

    <div className="product-details">

  <div className="detail-row1">
    <span className="label">Price:</span>
    <span className="value">Negotiable</span>
  </div>

  <div className=" detail-row">
    <span className="label">Type:</span>
    <span className="value">Classic T-Shirt</span>
  </div>

  <div className="detail-row">
    <span className="label">Material:</span>
    <span className="value">Cotton 100%</span>
  </div>

  <div className="detail-row1">
    <span className="label">Design:</span>
    <span className="value">Modern Nice</span>
  </div>

  <div className="detail-row">
    <span className="label">Customization:</span>
    <span className="value">
      Customized logo and design custom packages
    </span>
  </div>

  <div className="detail-row">
    <span className="label">Protection:</span>
    <span className="value">Refund Policy</span>
  </div>

  <div className="detail-row1">
    <span className="label">Warranty:</span>
    <span className="value">2 years full warranty</span>
  </div>

    <button className="addtocart" onClick={addToCart}>Add To Cart</button>

 </div>

    </div>
  );
}

export default ProductInfo;