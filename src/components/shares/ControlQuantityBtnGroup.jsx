import { useContext } from "react";
import PropTypes from "prop-types";
import { ProductContext } from "../../context/ProductContext";

import "./Quantity.scss";

const ControlQuantityBtnGroup = ({ id, quantity }) => {
  const { increase, decrease } = useContext(ProductContext);

  return (
    <div className="btn-group">
      <span className="quantity ">{quantity}</span>

      <div className="btns">
        <button className="plus" onClick={() => increase(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M20 8.57143L10 0L0 8.57143H20Z" fill="#393939" />
          </svg>
        </button>
        <button className=" minus" onClick={() => decrease(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M20 11.4286L10 20L0 11.4286H20Z" fill="#393939" />
          </svg>
        </button>
      </div>
    </div>
  );
};

ControlQuantityBtnGroup.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
};

export default ControlQuantityBtnGroup;
