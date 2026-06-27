import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./DealsOffers.css";
function DealsOffers() {
  const products = [
    { name: "Smart Watches", discount: "-25%", img: "/deals-images/smartwatch.jfif" },
    { name: "Laptops", discount: "-15%", img: "/deals-images/laptop.jpg" },
    { name: "GoPro Camera", discount: "-40%", img: "/deals-images/GoProCamera.webp" },
    { name: "Headphones", discount: "-25%", img: "/deals-images/Headphones.jpg" },
    { name: "Canon Camera", discount: "-25%", img: "/deals-images/canonmbile.jfif" },
  ];
  
  const navigate = useNavigate();
  const handleClick = (item) => {
  setSelected(item.name);
  navigate("/product-listing")
   };
  const [selected, setSelected] = useState(null);
 
  const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
  });
  const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; 

  useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeLeft({ days, hours, minutes, seconds });
  }, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="deals-container">
      <div className="deals-left">
        <h2>Deals and offers</h2>
        <p>Hygiene Equipments</p>

        <div className="deals-timer">
      <div>
    <h4>{timeLeft.days}</h4>
    <span>Days</span>
    </div>

    <div>
      <h4>{timeLeft.hours}</h4>
      <span>Hour</span>
    </div>

    <div>
      <h4>{timeLeft.minutes}</h4>
      <span>Min</span>
    </div>
    </div>

    <div>
      <h4>{timeLeft.seconds}</h4>
      <span>Sec</span>
    </div>
    </div>

      <div className="deals-products">
        {products.map((item, index) => (
          <div  className={`deals-card ${selected === item.name ? "active" : ""}`} 
          onClick={() => handleClick(item)} 
          key={item.name}>
            <img src={item.img} alt={item.name} />
            <h5>{item.name}</h5>
            <span className="deals-discount">{item.discount}</span>
          </div>
        ))}
       </div>
    </div>
  );
}

export default DealsOffers;
