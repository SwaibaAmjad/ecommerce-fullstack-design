import "./OrderSummary.css";

function OrderSummary() {
  return (
    <div className="order-summary">

      <div className="coupon-box">
        <p>Have a coupon?</p>

        <div className="coupon-input">
          <input type="text" placeholder="Add coupon" />
          <button>Apply</button>
        </div>
      </div>

      {/* Summary */}
      <div className="summary-box">

        <div className="summary-row">
          <span>Subtotal:</span>
          <span>$1403.97</span>
        </div>

        <div className="summary-row discount">
          <span>Discount:</span>
          <span>-$60.00</span>
        </div>

        <div className="summary-row tax">
          <span>Tax:</span>
          <span>+$14.00</span>
        </div>

        <hr />

        <div className="summary-row total">
          <span>Total:</span>
          <span>$1357.97</span>
        </div>

        <button className="checkout-btn">
          Checkout
        </button>

        <div className="payment-icons">
          <img src="/payment-images/American-Express.webp" alt="American Express" />
          <img src="/payment-images/mastercard.png" alt="Mastercard" />
          <img src="/payment-images/paypal.png" alt="Paypal" />
          <img src="/payment-images/visa.png" alt="Visa" />
          <img src="/payment-images/apple pay.png" alt="Apple Pay" />
        </div>

      </div>

    </div>
  );
}

export default OrderSummary;