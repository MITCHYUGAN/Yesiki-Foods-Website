import logo from "./Images/logo.svg";
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from "react";
import { ShoppingCartIcon } from "lucide-react";
import Cart from "../Cart/Cart";
import PropTypes from "prop-types"

const Header = ({cart, setCart}) => {
  const [openNav, setOpenNav] = useState("navClose");
  const [ifActive, setCartActive] = useState("cartClose");

  return (
    <header>
      <div className="headerSection">
        <a href="/">
          <img src={logo} className="logo" alt="Website Logo" />
        </a>
        <nav className={`${openNav} nav`}>
          <ul>
            <li>
              <a href="/menu">Our Menu</a>
            </li>
            <li>
              <a href="">Bulk Orders</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
          {/* <button className="navBtn">Order Now</button> */}
        </nav>

        <div>
          <RxDropdownMenu
            className="menuBtn"
            onClick={() => {
              if (openNav === "navOpen") {
                setOpenNav("navClose");
              } else {
                setOpenNav("navOpen");
              }
            }}
          />

          <button className="shopping_cart_button" onClick={() => setCartActive("cartOpen")}>
            <ShoppingCartIcon />
            <h4 className="">
              <span>CART </span> 
              <span>•</span>
              <span>{cart.length}</span>
            </h4>
          </button>
        </div>

        <Cart ifActive={ifActive} setCartActive={setCartActive} cart={cart} setCart={setCart} />
      </div>
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func
}

export default Header;
