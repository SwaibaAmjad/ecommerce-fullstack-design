import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
function Hero() {
  const navigate=useNavigate();
  const [activeCategory, setActiveCategory] = useState("");
  const handleLearnMore = () => {
  alert("Deals and Offers opened!");
  };
  const categories = [
  "Automobiles",
  "Clothes and wear",
  "Home interiors",
  "Computer and Tech",
  "Tools, equipments",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
  "More Category"
];
  return (
    <div className="hero">

      <div className="hero-container">
        <ul>
          {categories.map((item, index) => (
         <li
          key={index}
         onClick={() => setActiveCategory(item)}
         className={activeCategory === item ? "active" : ""}
           >
          {item}
         </li>
        ))}
       </ul>
       
      </div>

      <div className="hero-banner">
        <img src="/Banner.jfif" alt="Banner" />
        <button className="hero-learn-btn" onClick={handleLearnMore}>Learn More</button>
      </div>
      
      <div className="hero-side-cards">
        <div className="hero-card">
           < div className="hero-user-info">
             <FaUserCircle className="hero-user-icon"/><h4>Hi, User</h4>
           </div>
           <button className="hero-card-btn">Join Now</button>
           <button className="hero-card-btn" onClick={()=>navigate("/login")}>Log In</button>
        </div>
  
         <div className="hero-offer-card">
        <div className="hero-offer-card-1">
          Get US $10 off with a new supplier
        </div>
        </div>
        <div className="hero-offer-card">
        <div className="hero-offer-card-2">
          Send quotes with supplier preferences
        </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;
