import "./RelatedProducts.css";

function RelatedProducts() {
  const products = [
    {
      image: "/Related-images/T-shirt.jfif",
      title: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00",
    },
    {
      image: "/suggested-images/wallet.jfif",
      title: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00",
    },
    {
      image: "/Related-images/boys t-shirt.jpg",
      title: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00",
    },
    {
      image: "/Related-images/cup t-shirt.jpg",
      title: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00",
    },
    {
      image: "/Related-images/girls t-shirt.webp",
      title: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00",
    },
    {
      image: "/Related-images/kids t-shirt.jfif",
      title: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00",
    },
  ];

  return (
    <div className="related-products">
      <h3>Related products</h3>

      <div className="related-list">
        {products.map((product, index) => (
          <div className="related-card" key={index}>
            <div className="related-image">
              <img src={product.image} alt={product.title} />
            </div>

            <p className="related-title">
              {product.title}
            </p>

            <p className="related-price">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
