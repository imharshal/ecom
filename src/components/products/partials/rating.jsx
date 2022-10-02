import starImage from "../../../assets/star-rating.svg";
import "../products.css";
const Rating = () => {
  return (
    <span className="ratings">
      <img className="rating-star" src={starImage} alt="rating" />
      <img className="rating-star" src={starImage} alt="rating" />
      <img className="rating-star" src={starImage} alt="rating" />
      <img className="rating-star" src={starImage} alt="rating" />
      <img className="rating-star" src={starImage} alt="rating" />
    </span>
  );
};

export default Rating;
