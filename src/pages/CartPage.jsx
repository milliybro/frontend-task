import { Fragment, useContext, useState } from "react";
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
import { Button, Col, Form, Row } from "react-bootstrap";
import { useCreditCardValidator } from "react-creditcard-validator";

const CartPage = () => {
  const { cart, totalPriceOfCart, shipping, totalCart } =
    useContext(ProductContext);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  function expDateValidate(month, year) {
    if (Number(year) > 2030) {
      return "Expiry Date Year cannot be greater than 2030";
    }
    return;
  }

  const {
    getCardNumberProps,
    getCVCProps,
    getExpiryDateProps,
    meta: { erroredInputs },
  } = useCreditCardValidator({ expiryDateValidator: expDateValidate });
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

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group md="12" controlId="validationCustom01">
                  <Form.Label>Name on card</Form.Label>
                  <Form.Control required type="text" placeholder="Name" />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid card name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="12" controlId="validationCustom02">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="1111 2222 3333 4444"
                    {...getCardNumberProps()}
                  />
                  <small>
                    {erroredInputs.cardNumber && erroredInputs.cardNumber}
                  </small>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid card number.
                  </Form.Control.Feedback>
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Expiration date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="City"
                      required
                      {...getExpiryDateProps()}
                    />
                    <small>
                      {erroredInputs.expiryDate && erroredInputs.expiryDate}
                    </small>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid date.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="123"
                      {...getCVCProps()}
                      required
                    />
                    <small>{erroredInputs.cvc && erroredInputs.cvc}</small>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid CVV number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
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
                <Button type="submit">
                  ${totalCart}{" "}
                  <span>
                    Checkout <img src={right} alt="" />
                  </span>
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartPage;
