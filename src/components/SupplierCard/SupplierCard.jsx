import "./SupplierCard.css";
import { FaRegHeart,FaGlobe} from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
function SupplierCard() {
  return (
    <div className="supplier-card">

      {/* Supplier Header */}
      <div className="supplier-header">
        <div className="supplier-logo">
          R
        </div>

        <div className="supplier-info">
          <p className="supplier-label">Supplier</p>
          <p>Rizwan Trading LLC</p>
        </div>
      </div>

      {/* Supplier Details */}
      <div className="supplier-details">
        <p className="country">
         <img src="/flags/Flag-Germany.webp" alt="Germany" />
         Germany, Berlin</p>
        <p>
         <IoShieldCheckmarkOutline className="supplier-icon" /> Verified Seller</p>
        <p>
         <FaGlobe className="supplier-icon" /> Worldwide Shipping</p>
      </div>

      {/* Buttons */}
      <div className="supplier-buttons">
        <button className="inquiry-btn">
          Send Inquiry
        </button>

        <button className="profile-btn">
          Seller's Profile
        </button>
      </div>

       <button className="save-btn">
        <FaRegHeart className="supplier-icon" /> Save for later
      </button>

    </div>
         
  );
}

export default SupplierCard;