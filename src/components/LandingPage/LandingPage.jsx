import bellIcon from "./Images/bellIcon.svg"
import menu from "./Images/menu.svg"
import landingPageImg from "./Images/landingPageImg.svg"

const LandingPage = () =>{
    return(
        <section className="landingPageSection">
            <div className="landingPage">
                <div className="landingPageContents">
                    <h1 className="landingPageHeadingText">
                        <span>Delicious</span> Fast Food, Delivered Right to Your Door
                    </h1>
                    <p className="landingPageParagraph">
                        Ready for something different? Our fast food service 
                        takes your favorite classics and adds a little something extra,
                         whether it&apos;s a unique twist on a burger or a salad that&apos;s anything but boring. 
                         But don&apos;t worry, we haven&apos;t forgotten what makes fast food great: convenience and speed.
                    </p>
                    <div className="landingButtons">
                        <button className="makeOrderBtn">
                            <img src={bellIcon} alt="" />
                            <p>Make an order</p>
                        </button>
                        <button className="viewMenuBtn">
                            <img src={menu} alt="" />
                            <p>View our menu</p>
                        </button>
                    </div>
                </div>
                <div className="landingPageImg">
                    <img src={landingPageImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default LandingPage