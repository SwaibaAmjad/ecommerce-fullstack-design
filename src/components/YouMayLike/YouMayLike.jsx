import "./YouMayLike.css";

function YouMayLike() {
  const products = [
    {
      image: "/suggested-images/fog tall man jacket.jfif",
      title: "Men Blazers Sets Elegant Formal",
      price: "$7.00 - $99.50",
    },
    {
      image: "/suggested-images/jeans bags.jfif",
      title: "Men Shirt Sleeve Polo Contrast",
      price: "$7.00 - $99.50",
    },
    {
      image: "/suggested-images/diamond watch.jfif",
      title: "Apple Watch Series Space Gray",
      price: "$7.00 - $99.50",
    },
    {
      image: "/suggested-images/wool sweater.jfif",
      title: "Basketball Crew Socks Long Stuff",
      price: "$7.00 - $99.50",
    },
    {
      image: "/suggested-images/T-Shirts.jfif",
      title: "New Summer Men's Castrol T-Shirts",
      price: "$7.00 - $99.50",
    },
    {
      image: "/suggested-images/wool scarf.jfif",
      title: "New Summer Men's Castrol T-Shirts",
      price: "$7.00 - $99.50",
    },


  ];

  return (
    <div className="you-may-like">

      <h3>You may like</h3>

      {products.map((product, index) => (
        <div className="like-item" key={index}>

          <div className="like-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="like-info">
            <p className="like-title">{product.title}</p>
            <p className="like-price">{product.price}</p>
          </div>

        </div>
      ))}

    </div>
  );
}

export default YouMayLike;