import menu from "./Images/menu.svg"
import threeplates from "./Images/threePlates.png"

const ViewMenu = () => {
    return(
        <section className="viewMenuSection">
            <div className="viewMenu">
                <div className="viewMenuContents">
                    <h1> <span>Browse</span> our food menu now</h1>
                    <p className="viewMenuContentsParagraph">Browse through our food menu and prices and select your orders</p>
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
    )
}

export default ViewMenu