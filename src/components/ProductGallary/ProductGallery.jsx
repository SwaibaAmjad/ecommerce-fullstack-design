
import "./ProductGallery.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function ProductGallery() {
  const location = useLocation();
  const product = location.state?.product;

  // Agar product ki image na ho to default image
  const images = [
    product?.image || "/gadget-images/camera.webp",
    product?.image || "/gadget-images/camera.webp",
    product?.image || "/gadget-images/camera.webp",
    product?.image || "/gadget-images/camera.webp",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (img, index) => {
    setMainImage(img);
    setActiveIndex(index);
  };

  return (
    <div className="gallery">

      {/* Main Image */}
      <div className="main-image">
        <img
          src={mainImage}
          alt={product?.title}
        />
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumb ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() =>
              handleImageClick(img, index)
            }
          >
            <img
              src={img}
              alt={`thumbnail-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
