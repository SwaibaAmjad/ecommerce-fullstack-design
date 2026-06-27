import { FaStar, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./GridCard.css";
function GridCard({
  _id,
  image,
  title,
  price,
  oldPrice,
  rating,
}){
const navigate = useNavigate();

  const handleCardClick = () => {
  console.log("Sending:", {
    _id,
    image,
    title,
    price,
  });

  navigate("/web-detail", {
    state: {
      product: {
        _id,
        image,
        title,
        price,
      },
    },
  });
};

 
  return (
    <div className="grid-card" onClick={handleCardClick}>
      <div className="grid-img">
        <img src={image} alt={title} />

        <button className="wishlist-btn"
          onClick={(e) => {
          e.stopPropagation();}}>
          <FaRegHeart />
        </button>
      </div>

      <div className="grid-info">
        <div className="grid-price">
          <span className="New-price">{price}</span>
          <span className="old-price">{oldPrice}</span>
        </div>

        <div className="grid-rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span>{rating}</span>
        </div>

        <p className="grid-title">{title}</p>
      </div>
    </div>
  );
}

export default GridCard;