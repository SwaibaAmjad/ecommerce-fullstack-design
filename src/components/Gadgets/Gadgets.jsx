import "./Gadgets.css";
import { useNavigate } from "react-router-dom";
function Gadgets() {

     const navigate = useNavigate();
     const handleSourceNow = () => {
     console.log("Gadgets Source Now Clicked");

     navigate("/product-listing")
    };
    const handleProductClick = (productName) => {
    console.log("Selected Gadget:", productName);
    };

  return (
    <div className="electronicsandgadgets">

      <div className="left-banner-gadget">
        <img src="/gadget-images/Banner.jfif" alt="Banner" />
        <button onClick={handleSourceNow}>Source Now</button>
      </div>

      <div className="gadget-grid">

  <div className="gadget-card" onClick={() => handleProductClick("Smart Watches")}>
    <h4>Smart Watch</h4>
    <p>From USD 19</p>
    <img src="/gadget-images/smart watch.jpg" alt="chair" />
  </div>

  <div className="gadget-card" onClick={() => handleProductClick("Smart Watches")}>
    <h4>Laptop & PC</h4>
    <p>From USD 19</p>
    <img src="/gadget-images/laptop.jfif" alt="sofa" />
  </div>

  <div className="gadget-card" onClick={() => handleProductClick("Smart Watches")}>
    <h4>Smart phone </h4>
    <p>From USD 19</p>
    <img src="/gadget-images/smart phone.jfif" alt="dishes" />
  </div>

  <div className="gadget-card" onClick={() => handleProductClick("Smart Watches")}>
    <h4>Camera</h4>
    <p>From USD 19</p>
    <img src="/gadget-images/camera.webp" alt="watch" />
  </div>

  <div className="gadget-card" onClick={() => handleProductClick("Smart Watches")}>
    <h4>Microphone </h4>
    <p>From USD 100</p>
    <img src="/gadget-images/microphone.jfif" alt="mixer" />
  </div>

  <div className="gadget-card" onClick={() => handleProductClick("Smart Watches")}>
    <h4>Gaming</h4>
    <p>From USD 39</p>
    <img src="/gadget-images/gaming.jfif" alt="blender" />
  </div>

  <div className="gadget-card" onClick={() => handleProductClick("Smart Watches")}>
    <h4>Earphones</h4>
    <p>From USD 19</p>
    <img src="/gadget-images/earphones.jfif" alt="appliance" />
  </div>

  <div className="gadget-card" onClick={() => handleProductClick("Smart Watches")}>
    <h4>Charger</h4>
    <p>From USD 10</p>
    <img src="/gadget-images/charging stand.jfif" alt="coffee" />
  </div>

</div>

    </div>
  );
}
export default Gadgets;