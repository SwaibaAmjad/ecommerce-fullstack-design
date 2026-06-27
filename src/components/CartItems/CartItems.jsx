import "./CartItems.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function CartItems() {
  const navigate = useNavigate();

  const handleQtyChange = (index, newQty) => {
  const updatedItems = [...items];
  updatedItems[index].quantity = Number(newQty);
  setItems(updatedItems);
  };
  const [items, setItems] = useState([]);
  useEffect(() => {
  fetch("http://localhost:5000/api/cart")
    .then((res) => res.json())
    .then((data) => setItems(data))
    .catch((err) => console.log(err));
   }, []);

  const handleRemove = async (id) => {
  try {
    await fetch(`http://localhost:5000/api/cart/${id}`, {
      method: "DELETE",
    });

    setItems(items.filter((item) => item._id !== id));
  } catch (error) {
    console.log(error);
  }
};

  const handleRemoveAll = () => {
  setItems([]);
  };

   return (
    <div className="cart-items">
      {items.map((item, index) => (
        <div className="cart-item" key={item._id}>
          {/* Left */}
          <div className="item-left">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="item-details">
              <h4>{item.name}</h4>

              <p>Seller: Artel Market</p>

              <div className="item-buttons">
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>

                <button className="save-btn">
                  Save for later
                </button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="item-right">
            <h4>${item.price}</h4>

            <select
              value={item.quantity}
              onChange={(e) =>
                handleQtyChange(index, e.target.value)
              }
            >
              <option value={1}>Qty: 1</option>
              <option value={2}>Qty: 2</option>
              <option value={3}>Qty: 3</option>
              <option value={4}>Qty: 4</option>
              <option value={5}>Qty: 5</option>
            </select>
          </div>
        </div>
      ))}

      <div className="cart-footer">
        <button
          className="back-btn"
          onClick={() => navigate("/product-listing")}
        >
          ← Back to shop
        </button>

        <button
          className="remove-all-btn"
          onClick={handleRemoveAll}
        >
          Remove all
        </button>
      </div>
    </div>
  );
}
export default CartItems;