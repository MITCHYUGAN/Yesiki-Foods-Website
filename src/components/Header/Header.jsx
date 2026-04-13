import logo from "./Images/logo.svg";
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from "react";
import { ShoppingCartIcon } from "lucide-react";
import Cart from "../Cart/Cart";
import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

const Header = () => {
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
              <HashLink to={"/#bulkOrdersSection"}>Bulk Orders</HashLink>
              <a href=""></a>
            </li>
            <li>
              <HashLink smooth to={"/#questionSections"}>
                Contact Us
              </HashLink>
            </li>
          </ul>
          {/* <button className="navBtn">Order Now</button> */}
        </nav>

        <div className="header_content">
          <button className="shopping_cart_button" onClick={() => setCartActive("cartOpen")}>
            <ShoppingCartIcon />
            <h4 className="">
              <span>CART </span>
              <span>•</span>
              <span>{cart.length}</span>
            </h4>
          </button>

          <RxDropdownMenu size={35}
            className="menuBtn"
            onClick={() => {
              if (openNav === "navOpen") {
                setOpenNav("navClose");
              } else {
                setOpenNav("navOpen");
              }
            }}
          />
        </div>

        <Cart ifActive={ifActive} setCartActive={setCartActive} />
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
