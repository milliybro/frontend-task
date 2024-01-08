import { PropTypes } from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Cart.css"
const FavouriteCard = ({
  image,
  name,
  description,
  price,
}) => {
  return (
    <div className="bg-white p-4 d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center gap-5">
        <LazyLoadImage src={image} alt="" />
        <div className="cart-left">
          <h3>{name}</h3>
          <h4>{description}</h4>
        </div>
      </div>
      <div className="d-flex align-items-center gap-5">
        <p className="cart-price">{price}  ₽</p>
      </div>
    </div>
  );
};

FavouriteCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  filter: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default FavouriteCard;
