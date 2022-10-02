import Rating from "./rating";
import "../products.css";
const Card = ({ id, name, image, oldPrice, newPrice, handleCart }) => {
  return (
    <div key={id} className="product-card">
      <img className="product-image" src={image} alt={name} />
      <p className="product-name">
        {name.length > 70 ? name.slice(0, 70) + "..." : name}
      </p>
      <div className="flex-space-between">
        <Rating />
        <span className="product-prices">
          <span className="old-price">{oldPrice}</span>
          <span className="new-price">{newPrice}</span>
        </span>
      </div>
      <div className="button-container">
        <button type="button" className="add-to-cart" onClick={handleCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Card;
