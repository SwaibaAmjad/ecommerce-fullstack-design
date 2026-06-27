import { FaThLarge, FaBars } from "react-icons/fa";
import "./FilterBar.css";

function FilterBar({ view, setView }) {
  return (
    <div className="filter-bar">
      <p>
        12,911 items in <strong className="strong">Mobile accessory</strong>
      </p>

      <div className="filter-controls">

        <label className="verified">
          <input type="checkbox" />
          Verified only
        </label>

        <select className="featured-select">
          <option>Featured</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>

        <button
          className={`view-btn ${view === "grid" ? "active" : ""}`}
          onClick={() => setView("grid")}
        >
          <FaThLarge />
        </button>

        <button
          className={`view-btn ${view === "list" ? "active" : ""}`}
          onClick={() => setView("list")}
        >
          <FaBars />
        </button>

      </div>
    </div>
  );
}

export default FilterBar;