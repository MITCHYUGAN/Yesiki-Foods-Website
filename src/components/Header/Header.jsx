import logo from "./Images/logo.svg";
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from "react";
import { ShoppingCartIcon } from "lucide-react";
import Cart from "../Cart/Cart";
import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router";

const Header = ({total}) => {
  const { cart } = useContext(CartContext);

  const [openNav, setOpenNav] = useState("navClose");
  const [ifActive, setCartActive] = useState("cartClose");

  return (
    <header>
      <div className="headerSection">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="Website Logo" />
        </Link>
        <nav className={`${openNav} nav`}>
          <ul>
            <li>
              <Link to={"/menu"}>Our Menu</Link>
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

        <Cart ifActive={ifActive} setCartActive={setCartActive} total={total} />
      </div>
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  total: PropTypes.number,
};

export default Header;
