import menu from "./Images/menu.svg";
import bulkordersImg from "./Images/bulkordersImg.png";
import { Link } from "react-router";

const bulkOrdersMessage = `Hello YesikiFoods!\n\nI would like to place a bulk order for [Event Name or Purpose, e.g., corporate lunch] on [Date] at [Time].\n\nHere are the details:\n— *Items*: [Item Name & Quantity](e.g., 50 plates of Jollof Rice)\n—*Special Instructions*: [e.g., Very spicy, low salt]\n—*Total Expected Guests*: [Number]\n\nPlease confirm receipt of this order and let me know the total cost, including delivery/service fees.\n\nThank you.`;
const encodedMessage = encodeURIComponent(bulkOrdersMessage);

const BulkOrders = () => {
  return (
    <section className="bulkOrdersSection" id="bulkOrdersSection">
      <div className="bulkOrders">
        <div className="bulkOrdersImg">
          <img src={bulkordersImg} alt="" />
        </div>
        <div className="bulkOrdersContents">
          <h1>
            <span>Bulk</span> Orders
          </h1>
          <p className="bulkOrdersContentsParagraph">
            <strong>Ordering for a Crowd?</strong> Whether it&apos;s an office lunch, a family gathering, or an event — we handle large orders with ease. Send us your list and we&apos;ll take care of
            the rest.
          </p>
          <Link to={`https://wa.me/+2348159716937?text=${encodedMessage}`} target="_blank">
            <button className="bulkOrdersBtn">
              <img src={menu} alt="" />
              <p>Request Bulk Order</p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BulkOrders;
