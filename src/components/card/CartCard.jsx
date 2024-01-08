import { PropTypes } from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ControlQuantityBtnGroup from "../shares/ControlQuantityBtnGroup";
import trash from "../../assets/cart/trash.png";
import "./Cart.scss";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const CartCard = ({ id, image, name, description, price, quantity }) => {
  const { trashBum } = useContext(ProductContext);
  return (
    <div className="oneCart">
      <LazyLoadImage className="cart-image" src={image} alt="" />
      <div className="cart-info">
        <div className="cart-left">
          <h3>{name}</h3>
          <h4>{description}</h4>
        </div>
      </div>
      <div className="cartDesc-inc">
        <ControlQuantityBtnGroup id={id} quantity={quantity} />
      </div>
      <p className="cart-price">$ {price * quantity}</p>
      <button className="trashCard" onClick={() => trashBum(id)}>
        <img src={trash} alt="" />
      </button>
    </div>
  );
};

CartCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
};

export default CartCard;
