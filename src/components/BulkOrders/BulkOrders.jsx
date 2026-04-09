import menu from "./Images/menu.svg";
import bulkordersImg from "./Images/bulkordersImg.png";

const BulkOrders = () => {
  return (
    <section className="bulkOrdersSection">
      <div className="bulkOrders">
        <div className="bulkOrdersImg">
          <img src={bulkordersImg} alt="" />
        </div>
        <div className="bulkOrdersContents">
          <h1>
            <span>Bulk</span> Orders
          </h1>
          <p className="bulkOrdersContentsParagraph">
            <strong>Ordering for a Crowd?</strong> Whether it&apos;s an office lunch, a family gathering, or an event — we handle large orders with ease. Send us your list and we&apos;ll take care of the rest.
          </p>
          <button className="bulkOrdersBtn">
            <img src={menu} alt="" />
            <p>Request Bulk Order</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BulkOrders;
