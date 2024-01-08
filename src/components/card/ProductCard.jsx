import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./ProductCard.css";
import { Fragment, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ControlQuantityBtnGroup from "../shares/ControlQuantityBtnGroup";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard = ({ id, image, name, description, price }) => {
  const { addToCart, cart } = useContext(ProductContext);
  let productInCart = cart.find((pr) => pr.id === id);
  return (
    <div className="card product">
      <LazyLoadImage className="w-100" effect="blur" src={image} alt={name} />
      <div className="card-body">
        <Link to={`/products/${id}`} className="card-name">
          {name}
        </Link>
        <p className="card-desc">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          {productInCart ? (
            <Fragment>
              <ControlQuantityBtnGroup
                id={id}
                quantity={productInCart.quantity}
              />
            </Fragment>
          ) : (
            <button onClick={() => addToCart(id)} className="btn card-btn">
              Add to cart
            </button>
          )}
          <span className="card-price">$ {price} </span>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  filter: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
