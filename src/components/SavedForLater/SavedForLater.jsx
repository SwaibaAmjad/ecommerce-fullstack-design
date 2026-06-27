import "./SavedForLater.css";
import { FaShoppingCart } from "react-icons/fa";

function SavedForLater() {
  const products = [
    {
      image: "/deals-images/canonmbile.jfif",
      price: "$99.50",
      title: "Canon 40 pro Phones -Sky Blue ",
    },
    {
      image: "/deals-images/laptop.jpg",
      price: "$99.50",
      title: "Dell Latitude 5490 Laptop -Black",
    },
    {
      image: "/deals-images/smartwatch.jfif",
      price: "$99.50",
      title: "Q-Watch Bluetooth Calling Watch",
    },
    {
      image: "/gadget-images/earphones.jfif",
      price: "$99.50",
      title: "LED pro Bluetooth Earphones",
    },
  ];

  return (
    <div className="saved-products">

      <h3>Saved for later</h3>

      <div className="saved-list">

        {products.map((product, index) => (
          <div className="saved-card" key={index}>

            <div className="saved-image">
              <img src={product.image} alt={product.title} />
            </div>

            <h4>{product.price}</h4>

            <p>{product.title}</p>

            <button className="move-btn">
              <FaShoppingCart />
              Move to cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default SavedForLater;