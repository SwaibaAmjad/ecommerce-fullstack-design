import "./Sidebar.css";
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="filter-section">
        <h4>Category</h4>
        <ul>
          <li>Mobile accessory</li>
          <li>Electronics</li>
          <li>Smartphones</li>
          <li>Modern tech</li>
        </ul>
        <p className="see-all">See all</p>
      </div>

      <div className="filter-section">
        <h4>Brands</h4>

        <label><input type="checkbox" /> Samsung</label>
        <label><input type="checkbox" /> Apple</label>
        <label><input type="checkbox" /> Huawei</label>
        <label><input type="checkbox" /> Poco</label>
        <label><input type="checkbox" /> Lenovo</label>

        <p className="see-all">See all</p>
      </div>

      <div className="filter-section">
        <h4>Features</h4>

        <label><input type="checkbox" /> Metallic</label>
        <label><input type="checkbox" /> Plastic cover</label>
        <label><input type="checkbox" /> 8GB Ram</label>
        <label><input type="checkbox" /> Super power</label>
        <label><input type="checkbox" /> Large Memory</label>

        <p className="see-all">See all</p>
      </div>

      <div className="price-range-section">
        <div className="pricing-header">
          <h3>Price range</h3>
         <span>⌃</span>
        </div>

      <div className="range-slider">
       <input type="range" min="0" max="999999" />
       <input type="range" min="0" max="999999" />
      </div>

      <div className="price-labels">
       <span>Min</span>
       <span>Max</span>
      </div>

    <div className="price-inputs">
       <input type="number" placeholder="0" />
       <input type="number" placeholder="999999" />
    </div>

       <button className="apply-btn">Apply</button>
  </div>

    <div className="condition-section">
      <h4>Condition</h4>
      <label>
        <input type="radio" name="condition" />
         Any
      </label>

      <label>
        <input type="radio" name="condition" />
         Refurbished
      </label>

      <label>
        <input type="radio" name="condition" />
         Brand New
      </label>

      <label>
        <input type="radio" name="condition" />
        Old Items
      </label>
    </div>

    </aside>
  );
}

export default Sidebar;