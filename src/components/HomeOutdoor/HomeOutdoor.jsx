import "./HomeOutdoor.css";
import { useNavigate } from "react-router-dom";
function HomeOutdoor() {

     const navigate = useNavigate();
    const handleSourceNow = () => {
    console.log("Source Now Clicked");

    navigate("/product-listing");
  };

    const handleProductClick = (productName) => {
    console.log("Selected Product:", productName);
  };

  return (
    <div className="home-outdoor">

      <div className="left-banner">
        <img src="/HomeOutdoor/HomeOutdoor Banner.jfif" alt="Banner" />
        <button onClick={handleSourceNow}>Source Now</button>
      </div>

      <div className="home-products-grid">

  <div className="home-card"  onClick={() => handleProductClick("Soft Chairs")}>
    <h4>Soft Chairs</h4>
    <p>From USD 19</p>
    <img src="/HomeOutdoor/softchair.jfif" alt="chair" />
  </div>

  <div className="home-card"  onClick={() => handleProductClick("lamp")}>
    <h4>Lamps</h4>
    <p>From USD 19</p>
    <img src="/HomeOutdoor/lamp.jfif" alt="sofa" />
  </div>

  <div className="home-card"  onClick={() => handleProductClick("Kitchen dishes")}>
    <h4>Kitchen Dishes</h4>
    <p>From USD 19</p>
    <img src="/HomeOutdoor/kitchendishes.jpg" alt="dishes" />
  </div>

  <div className="home-card"  onClick={() => handleProductClick("Indoor Plants")}>
    <h4>Indoor plants</h4>
    <p>From USD 19</p>
    <img src="/HomeOutdoor/plants.jpg" alt="watch" />
  </div>

  <div className="home-card"  onClick={() => handleProductClick("Kitchen Mixer")}>
    <h4>Kitchen Mixer</h4>
    <p>From USD 100</p>
    <img src="/HomeOutdoor/kitchenmixer.jfif" alt="mixer" />
  </div>

  <div className="home-card"  onClick={() => handleProductClick("Grocery Items")}>
    <h4>Grocery Items</h4>
    <p>From USD 39</p>
    <img src="/HomeOutdoor/grocery.jfif" alt="blender" />
  </div>

  <div className="home-card"  onClick={() => handleProductClick("Refrigerator")}>
    <h4>Home Appliance</h4>
    <p>From USD 19</p>
    <img src="/HomeOutdoor/refrigerator.png" alt="appliance" />
  </div>

  <div className="home-card"  onClick={() => handleProductClick("Cofee Maker")}>
    <h4>Coffee Maker</h4>
    <p>From USD 10</p>
    <img src="/HomeOutdoor/coffeemaker.webp" alt="coffee" />
  </div>

</div>

    </div>
  );
}

export default HomeOutdoor;