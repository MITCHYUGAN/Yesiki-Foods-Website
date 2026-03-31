import logo from "./Images/logo.svg";
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [openNav, setOpenNav] = useState("navClose");
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
          <button className="navBtn">Order Now</button>
          <p>Cart Icon</p>
        </nav>
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
      </div>
    </header>
  );
};

export default Header;
