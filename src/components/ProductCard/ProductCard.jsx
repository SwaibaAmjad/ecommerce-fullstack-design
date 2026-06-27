import { FaStar, FaRegStar, FaStarHalfAlt, FaRegHeart} from "react-icons/fa";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
function ProductCard({ 
  _id,
  image,
  title,
  price,
  oldPrice,
  rating,
  orders,
  shipping,
  description,

 }) {
  const  navigate = useNavigate();
  const handleCardClick = () => {
  console.log("Sending:", {
    _id,
    image,
    title,
    price,
    description,
  });

  navigate("/web-detail", {
    state: {
      product: {
        _id,
        image,
        title,
        price,
        description,
      },
    },
  });
};

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img src={image} alt={title} />

      <div className="product-info">
        <h3>{title}</h3>

        <div className= "price-section">
         <span className="new-price">${price}</span>
         <span className="old-price">{oldPrice}</span>
        </div>

         <div className="product-rating">
         <FaStar  />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalfAlt />

         <span className="text-rating">{rating}</span>
         <span className="product-dot">•</span>
         <span className="product-order">{orders}</span>
         <span className="product-dot">•</span>
         <span className="product-shipping">{shipping}</span>

         </div>

        <p>
            {description}
        </p>

      <button className="view-details">
      View Details
     </button>

      </div>
      <button className="wishlist-button">
        <FaRegHeart className="wishlist-icon" />
      </button>
    </div>
  );
}

export default ProductCard;