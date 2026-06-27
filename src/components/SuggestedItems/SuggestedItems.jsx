import "./SuggestedItems.css";
import {useNavigate} from "react-router-dom";
function SuggestedItems(){

    const navigate = useNavigate();
    const handleSuggestedClick = (productName) => {
    console.log("Selected Suggested Item:", productName);
    navigate("/product-listing");
    };

    return(
        <div className="Suggested-section">
            <h2>Recommended Items</h2>
            <div className="suggested-grid">
                <div className="suggested-card" onClick={() => handleSuggestedClick("T-Shirts")}
>
                    <img src="/suggested-images/T-Shirts.jfif" alt="T-shirts" />
                    <h4>$10.30</h4>
                    <p>T-Shirts with multiple colours</p>
                </div>
                <div className="suggested-card" onClick={() => handleSuggestedClick("T-Shirts")}>
                    <img src="/suggested-images/brown coat.jfif" alt="Brown Coat" />
                    <h4>$12.59</h4>
                    <p>Brown Winter Coat medium size</p>
                </div>
                <div className="suggested-card" onClick={() => handleSuggestedClick("T-Shirts")}>
                    <img src="/suggested-images/shorts.jfif" alt="shorts" />
                    <h4>$10.30</h4>
                    <p>Jeans Shorts for men blue colour</p>
                </div>
                <div className="suggested-card" onClick={() => handleSuggestedClick("T-Shirts")}>
                    <img src="/suggested-images/wallet.jfif" alt="wallet" />
                    <h4>$10.30</h4>
                    <p>Blue Wallet for men leather material</p>
                </div>
                <div className="suggested-card" onClick={() => handleSuggestedClick("T-Shirts")}>
                    <img src="/suggested-images/jeans bags.jfif" alt="Jeans Bag" />
                    <h4>$34.00</h4>
                    <p>Jeans Bag for travel for women</p>
                </div>
                <div className="suggested-card" onClick={() => handleSuggestedClick("T-Shirts")}>
                    <img src="/suggested-images/formal jackets.jpg" alt="" />
                    <h4>$20.00</h4>
                    <p>Formal Jacket for men</p>
                </div>
                <div className="suggested-card" onClick={() => handleSuggestedClick("T-Shirts")}>
                    <img src="/suggested-images/fog tall man jacket.jfif" alt="Jacket" />
                    <h4>$42.99</h4>
                    <p>London Fog Men's Auburn Zip-Front Golf Jacket
                   </p>
                </div>
                <div className="suggested-card" onClick={() => handleSuggestedClick("T-Shirts")}>
                    <img src="/suggested-images/diamond watch.jfif" alt="Diamond watch" />
                    <h4>$16.99</h4>
                    <p>Halukakah Diamond Watch for Men</p>
                </div>
                <div className="suggested-card" onClick={() => handleSuggestedClick("T-Shirts")}>
                    <img src="/suggested-images/wool scarf.jfif" alt="Scarf" />
                    <h4>$25.99</h4>
                    <p>Wool Scarf for Women</p>
                </div>
                <div className="suggested-card" onClick={() => handleSuggestedClick("T-Shirts")}>
                    <img src="/suggested-images/wool sweater.jfif" alt="Sweater" />
                    <h4>$40.99</h4>
                    <p>Wool Swaeter for Men</p>
                </div>
            </div>
        </div>
    );
}
export default SuggestedItems;