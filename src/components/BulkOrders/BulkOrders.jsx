import menu from "./Images/menu.svg"
import bulkordersImg from "./Images/bulkordersImg.png"

const BulkOrders = () =>{
    return(
        <section className="bulkOrdersSection">
            <div className="bulkOrders">
                <div className="bulkOrdersImg">
                    <img src={bulkordersImg} alt="" />
                </div>
                <div className="bulkOrdersContents">
                    <h1><span>Bulk</span> Orders</h1>
                    <p className="bulkOrdersContentsParagraph">
                        Browse through our food menu and prices 
                        and select your orders Browse through our 
                        food menu and prices and select your orders
                    </p>
                    <button className="bulkOrdersBtn">
                        <img src={menu} alt="" />
                        <p>Request Bulk Order</p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default BulkOrders