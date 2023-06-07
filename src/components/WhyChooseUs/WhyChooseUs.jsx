import fastFoodIcon from "./Images/fastfoodIcon.svg"
import swiftdelivery from "./Images/swiftdeliveryIcon.svg"

const WhyChooseUs = () =>{
    return(
        <section className="whyChooseUsSection">
            <div className="whyChooseUs">
                <div className="fastFood">
                    <img src={fastFoodIcon} className="fastFoodIcon" alt="Fast Food Icon" />
                    <div className="fastFoodTexts">
                        <h2>Fresh Food Fast</h2>
                        <p>Ready for something different? Our fast food service takes </p>
                    </div>
                </div>
                <div className="swiftDelivery">
                    <img src={swiftdelivery} alt="Swift Delivery Icon" />
                    <div className="swiftDeliveryTexts">
                        <h2>Swift Delivery</h2>
                        <p>Ready for something different? Our fast food service takes </p>
                    </div>
                </div>
                <div className="bulkOrders">
                    <img src={fastFoodIcon} className="fastFoodIcon" alt="Bulk Orders Icon" />
                    <div className="bulkOrdersTexts">
                        <h2>Bulk Orders</h2>
                        <p>Ready for something different? Our fast food service takes </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs