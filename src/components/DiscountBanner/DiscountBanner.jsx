import "./DiscountBanner.css";

function DiscountBanner() {
  const handleShopNow = () => {
  console.log("Proceeding to shopping...");
  };

  return (
    <div className="discount-banner">

      <div className="banner-content">
        <h3>Super discount on more than 100 USD</h3>
        <p>Have you ever finally just write dummy info</p>
      </div>

      <button className="shop-btn" onClick={handleShopNow}>
        Shop now
      </button>

    </div>
  );
}

export default DiscountBanner;