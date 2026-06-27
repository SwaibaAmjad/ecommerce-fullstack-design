import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import {
  FaUser,
  FaEnvelope,
  FaShoppingCart,
  FaHeart,
  FaCaretDown,
  FaBars,
  FaTimes
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Category");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const handleSearch = () => {
  console.log("Search:", search);
  console.log("Category:", category);
  navigate(`/product-listing?search=${search}`);
  };

   const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">

        <div className="nav-logo" onClick={() => navigate("/")}>
          <img src="/logo.png" alt="logo" />
        </div>

        <div className="nav-search-container">
          <input type="text"
           placeholder="Search"
           value={search}
           onChange={(e) => setSearch(e.target.value)}/>

          <select  value={category}
           onChange={(e) => setCategory(e.target.value)}>
            <option>Category</option>
            <option>Electronics</option>
            <option>Clothes</option>
          </select>

          <button onClick={handleSearch}>Search</button>
        </div>

        <div className={`nav-icons ${menuOpen ? "active" : ""}`}>
          <div className="nav-icons-1"  onClick={() => navigate("/login")}>
          <FaUser /> Profile</div>
          <div className="nav-icons-1"><FaEnvelope /> Message</div>
          <div className="nav-icons-1"><FaHeart /> Orders</div>
          <div className="nav-icons-1" onClick={() => navigate("/cart")}><FaShoppingCart /> Cart</div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      <div className="subnav">
        <span><FaBars /> All Categories</span>
        <span>Hot Offers</span>
        <span>Gift Boxes</span>
        <span>Projects</span>
        <span>Help</span>
         <button onClick={() => navigate("/admin-login")}>
         <RiAdminLine className="admin-icon" />Admin</button>
      </div>
    </>
  );
}

export default Navbar;