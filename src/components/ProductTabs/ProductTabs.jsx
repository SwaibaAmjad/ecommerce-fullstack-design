import "./ProductTabs.css";

function ProductTabs() {
  return (
    <div className="product-tabs">
      <button className="active">Description</button>
      <button>Reviews</button>
      <button>Shipping</button>
      <button>About seller</button>
    </div>
  );
}

export default ProductTabs;