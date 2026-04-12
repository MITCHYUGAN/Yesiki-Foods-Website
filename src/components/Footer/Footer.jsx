import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <section className="footerSection">
      <div className="footer">
        <div className="footerdiv1">
          <h1>
            <span>Yesifik</span> <br /> Foods
          </h1>
          <p>Fresh meals, fast delivery — straight to your door in Lagos.</p>
        </div>
        <div className="footerservice">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to={"/menu"}>Our Menu</Link>
            </li>
            <li>
              <HashLink smooth to={"/#bulkOrdersSection"}>Bulk Orders</HashLink>
            </li>
            <li>
              <HashLink smooth to={"/#questionSections"}>Contact Us</HashLink>
            </li>
          </ul>
        </div>
        <div className="footersocials">
          <h2>Reach Us</h2>
          <ul>
            <li>
              <a href="https://wa.me/YOURNUMBER?text=Hello%20YesifikFoods!%20I%27d%20like%20to%20place%20an%20order" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <Link>Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="footerCopy">© 2025 YesifikFoods. All rights reserved.</p>
    </section>
  );
};

export default Footer;
