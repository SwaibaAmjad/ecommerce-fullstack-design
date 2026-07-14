import "./CartPage.css";
import CartItems from "../../components/CartItems/CartItems";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import ServiceFeatures from "../../components/ServiceFeatures/ServiceFeatures";
import SavedForLater from "../../components/SavedForLater/SavedForLater";
import DiscountBanner from "../../components/DiscountBanner/DiscountBanner";
function CartPage() {
  return (
    <div className="cart-page">

      <div className="cart-layout">

       <CartItems />

      <OrderSummary /> 

      </div>
      <ServiceFeatures />
      <SavedForLater />
      <DiscountBanner />

    </div>
  );
}

export default CartPage;