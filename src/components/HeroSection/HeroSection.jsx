import bellIcon from "./Images/bellIcon.svg";
import menu from "./Images/menu.svg";
import landingPageImg from "./Images/landingPageImg.svg";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="landingPageSection">
      <div className="landingPage">
        <div className="landingPageContents">
          <h1 className="landingPageHeadingText">
            <span>Fresh</span> Taste. <span>Fast</span> Delivery. Right to You.
          </h1>
          <p className="landingPageParagraph">From jollof rice to grilled chicken, we bring Lagos flavor straight to your door. No stress, no long wait — just good food, done right.</p>
          <div className="landingButtons">
            <Link to={"https://wa.me/+2348159716937?text=Hello%20I%20have%20a%20question"} target="_blank">
              <button className="makeOrderBtn">
                <img src={bellIcon} alt="" />
                <p>Make an order</p>
              </button>
            </Link>
            <Link to={"/menu"}>
              <button className="viewMenuBtn">
                <img src={menu} alt="" />
                <p>View our menu</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="landingPageImg">
          <img src={landingPageImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
