import { Fragment, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import CartCard from "../components/card/CartCard";
import client from "../assets/cart/client.png";
import masterCard from "../assets/cart/masterCard.png";
import visa from "../assets/cart/visa.png";
import ruPay from "../assets/cart/ruPay.png";
import right from "../assets/cart/Right.png";
import arrow from "../assets/cart/arrow.png";

import "./CartPage.scss";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const { cart, totalPriceOfCart, shipping, totalCart } = useContext(ProductContext);
  return (
    <Fragment>
      <section>
        <div className="container"></div>
      </section>
      <div id="shopping">
        <div className="container shopping">
          <div className="shopping-left">
            <div className="shopping-header">
              <NavLink to={"/"}>
                <img src={arrow} alt="Arrow" />
              </NavLink>
              <h3>Shopping Continue</h3>
            </div>
            <div className="line"></div>
            <div className="shopping-top">
              <h2>Shopping cart</h2>
              <h3>You have {cart.length} item in your cart</h3>
            </div>
            {cart.length !== 0 ? (
              cart.map((pr) => <CartCard key={pr.id} {...pr} />)
            ) : (
              <div className="emptyCart text-center bg-white">
                <img
                  src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif"
                  className="emptyGIF"
                />
              </div>
            )}
          </div>
          <div className="shopping-right">
            <div className="shopping-right-top">
              <h3>Card Details</h3>
              <img src={client} alt="client-image" />
            </div>
            <div className="cart-information">
              <h5>Card type</h5>
              <div className="cards">
                <img src={masterCard} alt="" />
                <img src={visa} alt="" />
                <img src={ruPay} alt="" />
                <h3>See all</h3>
              </div>
              <form action="#">
                <label htmlFor="">Name on card</label>
                <input type="text" placeholder="Name" />
                <label htmlFor="">Card Number</label>
                <input type="number" placeholder="1111 2222 3333 4444" />
                <div className="form-double">
                  <div>
                    <label htmlFor="">Expiration date</label>
                    <input type="date" placeholder="" />
                  </div>
                  <div>
                    <label htmlFor="">CVV</label>
                    <input type="number" placeholder="123" />
                  </div>
                </div>
                <div className="line"></div>
                <div className="shop-pay">
                  <div className="subtotal shop">
                    <h5>Subtotal</h5>
                    <h5>$ {totalPriceOfCart}</h5>
                  </div>
                  <div className="shipping shop">
                    <h5>Shipping</h5>
                    <h5>${shipping}</h5>
                  </div>
                  <div className="total shop">
                    <h5>Total (Tax incl.)</h5>
                    <h5>$ {totalCart}</h5>
                  </div>
                </div>
                <button>
                  ${totalCart}
                  <span>
                    Checkout <img src={right} alt="" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartPage;
