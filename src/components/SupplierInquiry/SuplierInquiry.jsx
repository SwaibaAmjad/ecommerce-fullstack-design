import { useState } from "react";
import "./SuplierInquiry.css";
function SuplierInquiry(){

  const [item, setItem] = useState("");
  const [details, setDetails] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("Pcs");

  const handleInquiry = () => {
  console.log("Item:", item);
  console.log("Details:", details);
  console.log("Quantity:", quantity);
  console.log("Unit:", unit);
};

return(
    <div className="inquiry-section">

  <div className="inquiry-left">
    <h2>An easy way to send requests to all suppliers</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt.
    </p>
  </div>

  <div className="inquiry-form">

    <h3>Send quote to suppliers</h3>

    <input 
      type="text"
      placeholder="What item you need?"
      value={item}
      onChange={(e) => setItem(e.target.value)}
    />

    <textarea
      placeholder="Type more details"
      value={details}
      onChange={(e) => setDetails(e.target.value)}
    ></textarea>

    <div className="quantity-row">
      <input
        type="text"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <select 
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      >
        <option>Pcs</option>
        <option>Kg</option>
        <option>Box</option>
      </select>
    </div>

    <button onClick={handleInquiry}>Send inquiry</button>

  </div>

</div>
);
}
export default SuplierInquiry;