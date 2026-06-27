import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";
function Footer() {

  const handleSocialClick = (platform) => {
  console.log(`${platform} clicked`);
};
  const handleFooterLink = (link) => {
  console.log(`${link} clicked`);
};
  const handleAppClick = (app) => {
  console.log(`${app} clicked`);
};

  return (
    <footer>

      <div className="footer-top">

        <div className="footer-brand">
          <img src="/logo2.png" alt="brand-logo" className="footer-logo"/>

          <p>
            Best information about the company goes here but now lorem ipsum is.
          </p>

          <div className="social-icons">
            <FaFacebookF  onClick={() => handleSocialClick("Facebook")}  />
            <FaTwitter   onClick={() => handleSocialClick("Twitter")} />
            <FaLinkedinIn  onClick={() => handleSocialClick("LinkedIn")} />
            <FaInstagram  onClick={() => handleSocialClick("Instagram")} />
            <FaYoutube  onClick={() => handleSocialClick("Yooutube")} />
          </div>
        </div>

        <div className="footer-links">
          <h4>About</h4>
          <p onClick={() => handleFooterLink("About Us")}>About Us</p>
          <p onClick={() => handleFooterLink("About Us")}>Find Store</p>
          <p onClick={() => handleFooterLink("About Us")}>Categories</p>
          <p onClick={() => handleFooterLink("About Us")}>Blogs</p>
        </div>

        <div className="footer-links">
          <h4>Partnership</h4>
          <p onClick={() => handleFooterLink("About Us")}>About Us</p>
          <p onClick={() => handleFooterLink("About Us")}>Find Store</p>
          <p onClick={() => handleFooterLink("About Us")}>Categories</p>
          <p onClick={() => handleFooterLink("About Us")}>Blogs</p>
        </div>

        <div className="footer-links">
          <h4>Information</h4>
          <p onClick={() => handleFooterLink("About Us")}>Help Center</p>
          <p onClick={() => handleFooterLink("About Us")}>Money Refund</p>
          <p onClick={() => handleFooterLink("About Us")}>Shipping</p>
          <p onClick={() => handleFooterLink("About Us")}>Contact Us</p>
        </div>

        <div className="footer-links">
          <h4>For Users</h4>
          <p onClick={() => handleFooterLink("About Us")}>Login</p>
          <p onClick={() => handleFooterLink("About Us")}>Register</p>
          <p onClick={() => handleFooterLink("About Us")}>Settings</p>
          <p onClick={() => handleFooterLink("About Us")}>My Orders</p>
        </div>

        <div className="get-app">
          <h4>Get App</h4>

          <img 
           src="/footer-image/get app.avif"
           alt="Google Play"
           onClick={() => handleAppClick("Google Play")}
          />
          <img 
           src="/footer-image/app store.png"
           alt="App Store" 
           onClick={() => handleAppClick("App Store")}
           />

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Ecommerce.</p>

        <span>English ▼</span>
      </div>

    </footer>
  );
}

export default Footer;