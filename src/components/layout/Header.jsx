import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

const Header = () => {
  const { totalPriceOfCart } = useContext(ProductContext);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 120;
      setIsSticky(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="">
      <div className={`wrapper  ${isSticky ? "sticky" : ""}`}>
        <nav className="fixed_navbar container align-items-center">
          <div className="d-flex justify-content-end align-items-center gap-3">
            <NavLink to="/cart" className="cart">
              {totalPriceOfCart} $
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
