import breakFastImg from "./Images/breakfastImg.png"
import lunchImg from "./Images/lunchImg.png"
import dinnerImg from "./Images/dinnerImg.png"
import line from "./Images/line.svg"

const OrderFoodOnTheGo = () => {
    return(
        <section className="OrderFoodOnTheGoSection">
            <div className="OrderFoodSectionHeading">
                <h1 className="OrderFoodSectionHeadingText">Order Food on the Go!</h1>
                <img src={line} alt="" />
            </div>
            <div className="OrderFoodOnTheGo">
               <div className="breakfastWrapper">
                 <img src={breakFastImg} alt="" />
                    <div className="breakfast">
                        <div className="breakfastTexts">
                            <h2>BreakFast</h2>
                            <p>Start your day right. Hot, fresh breakfast options ready to fuel your morning — from light bites to full meals.</p>
                        </div>
                    </div>
               </div>
              <div className="lunchWrapper">
                <img src={lunchImg} alt="" />
                <div className="lunch">
                    <div className="lunchTexts">
                        <h2>Lunch</h2>
                        <p>Midday hunger sorted. Rice, proteins, sides and more — everything you need to power through the rest of your day.</p>
                    </div>
                </div>
              </div>
               <div className="dinnerWrapper">
               <img src={dinnerImg} alt="" />
                <div className="dinner">
                        <div className="dinnerTexts">
                            <h2>Dinner</h2>
                            <p>End your day deliciously. Warm, satisfying dinner options delivered to you so you can relax and enjoy.</p>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    )
}

export default OrderFoodOnTheGo