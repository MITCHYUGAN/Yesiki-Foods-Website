import menu from "./Images/menu.svg";
import threeplates from "./Images/threePlates.png";

const ViewMenu = () => {
  return (
    <section className="viewMenuSection">
      <div className="viewMenu">
        <div className="viewMenuContents">
          <h1>
            {" "}
            <span>Browse</span> our food menu now
          </h1>
          <p className="viewMenuContentsParagraph">See What&apos;s Cooking From rice dishes to grilled meats and cold drinks — browse our full menu, check prices, and order exactly what you want.</p>
          <button className="makeOrderBtn">
            <img src={menu} alt="Menu Icon" />
            <p>View our Menu</p>
          </button>
        </div>
        <div className="viewMenuImg">
          <img src={threeplates} alt="View Menu Img" />
        </div>
      </div>
    </section>
  );
};

export default ViewMenu;
