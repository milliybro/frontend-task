import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { CART, SHIPPING } from "../constants";
import products from "../components/data/products";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(CART)) || []
  );
  const [shipping, setShipping] = useState(
    JSON.parse(localStorage.getItem(SHIPPING))
  );

  const controlQuantity = (id, sign) => {
    let res = cart.map((pr) => {
      if (pr.id === id) {
        sign === "+" ? pr.quantity++ : pr.quantity--;
      }
      return pr;
    });
    return res;
  };

  const addToCart = (id) => {
    let product = products.find((pr) => pr.id === id);
    let productInCart = cart.find((pr) => pr.id === id);

    let newCart;

    if (productInCart) {
      newCart = controlQuantity(id, "+");
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    let newShipping = 4;

    setCart(newCart);
    setShipping(newShipping);
    localStorage.setItem(CART, JSON.stringify(newCart));
    localStorage.setItem(SHIPPING, JSON.stringify(newShipping));
  };

  const trashBum = (id) => {
    let product = products.find((pr) => pr.id === id);
    let productInCart = cart.find((pr) => pr.id === id);


    if (productInCart) {
      localStorage.removeItem(CART, JSON.stringify(productInCart));
    } else {
      product.quantity = 1;
    }

  };

  const increase = (id) => {
    const newCart = controlQuantity(id, "+");
    setCart(newCart);
    localStorage.setItem(CART, JSON.stringify(newCart));
  };

  const decrease = (id) => {
    let newCart;
    let productInCart = cart.find((pr) => pr.id === id);
    if (productInCart.quantity > 1) {
      newCart = controlQuantity(id, "-");
    } else {
      newCart = cart.filter((pr) => pr.id !== id);
    }
    setCart(newCart);
    localStorage.setItem(CART, JSON.stringify(newCart));
  };

  let totalPriceOfCart = cart.reduce(
    (acc, pr) => acc + pr.price * pr.quantity,
    0
  );

  let totalCart = totalPriceOfCart + shipping;



  const state = {
    cart,
    shipping,
    totalPriceOfCart,
    totalCart,
    addToCart,
    increase,
    decrease,
    trashBum
  };

  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ProductContextProvider;
