import fastFoodIcon from "./Images/fastfoodIcon.svg";
import swiftdelivery from "./Images/swiftdeliveryIcon.svg";

const WhyChooseUs = () => {
  return (
    <section className="whyChooseUsSection">
      <div className="whyChooseUs">
        <div className="fastFood">
          <img src={fastFoodIcon} className="fastFoodIcon" alt="Fast Food Icon" />
          <div className="fastFoodTexts">
            <h2>Fresh Food Fast</h2>
            <p>We know hunger doesn&apos;t wait. Every order is prepared fresh and ready for pickup or delivery without the long wait. </p>
          </div>
        </div>
        <div className="swiftDelivery">
          <img src={swiftdelivery} alt="Swift Delivery Icon" />
          <div className="swiftDeliveryTexts">
            <h2>Swift Delivery</h2>
            <p>Once your order is placed, our dispatch gets moving. We deliver to your location so you don&apos;t have to leave your comfort. </p>
          </div>
        </div>
        <div className="bulkOrders">
          <img src={fastFoodIcon} className="fastFoodIcon" alt="Bulk Orders Icon" />
          <div className="bulkOrdersTexts">
            <h2>Bulk Orders</h2>
            <p>Feeding a group? Order multiple items at once and get everything delivered together. Perfect for offices, events, or a hungry household.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
