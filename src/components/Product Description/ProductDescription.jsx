import "./ProductDescription.css";
import ProductTabs from "../ProductTabs/ProductTabs";
import { FaCheck } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function ProductDescription() {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div className="product-description">

      <ProductTabs />

      {/* Description */}
      <p className="description-text">
      {product?.description}
      </p>

      {/* Specifications Table */}
      <div className="specifications">

        <div className="spec-row">
          <span className="spec-label">Model</span>
          <span className="spec-value">#8786867</span>
        </div>

        <div className="spec-row">
          <span className="spec-label">Style</span>
          <span className="spec-value">Classic style</span>
        </div>

        <div className="spec-row">
          <span className="spec-label">Certificate</span>
          <span className="spec-value">ISO-898921212</span>
        </div>

        <div className="spec-row">
          <span className="spec-label">Size</span>
          <span className="spec-value">34mm × 450mm × 19mm</span>
        </div>

        <div className="spec-row">
          <span className="spec-label">Memory</span>
          <span className="spec-value">36GB RAM</span>
        </div>

      </div>

      {/* Features */}
      <ul className="features">
        <li>
          <FaCheck className="check-icon" />
          Some great feature name here
        </li>

        <li>
          <FaCheck className="check-icon" />
          Lorem ipsum dolor sit amet, consectetur
        </li>

        <li>
          <FaCheck className="check-icon" />
          Duis aute irure dolor in reprehenderit
        </li>

        <li>
          <FaCheck className="check-icon" />
          Some great feature name here
        </li>
      </ul>

    </div>
  );
}

export default ProductDescription;