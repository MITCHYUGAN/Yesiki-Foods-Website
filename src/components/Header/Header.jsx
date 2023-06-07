import logo from "./Images/logo.svg"
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
    const [ openNav, setOpenNav ] = useState("navClose")
    return(
        <header>
            <div className="headerSection">
                <img src={logo} className="logo" alt="Website Logo" />
                <nav className={`${openNav} nav`}>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Menu</a>
                        </li>
                        <li>
                            <a href="">Meals</a>
                        </li>
                        <li>
                            <a href="">Bulk Orders</a>
                        </li>
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                    </ul>
                    <button className="navBtn">Order Now</button>
                </nav>
                <RxDropdownMenu className="menuBtn" 
                    onClick={() => {
                        if (openNav === "navOpen") {
                            setOpenNav("navClose")
                        } else {
                            setOpenNav("navOpen")
                        }
                    }}
                />
            </div>
        </header>
    )
}

export default Header