import "./ServiceFeatures.css";
import { MdSecurity } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaTruck } from "react-icons/fa";

function ServiceFeatures() {
  return (
    <div className="service-features">

      <div className="feature-item">
        <div className="feature-icon">
          <MdSecurity className="icons"/>
        </div>

        <div>
          <h4>Secure payment</h4>
          <p>Have you ever finally just</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-icon">
          <MdMessage className="icons"/>
        </div>

        <div>
          <h4>Customer support</h4>
          <p>Have you ever finally just</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-icon">
          <FaTruck className="icons" />
        </div>

        <div>
          <h4>Free delivery</h4>
          <p>Have you ever finally just</p>
        </div>
      </div>

    </div>
  );
}

export default ServiceFeatures;