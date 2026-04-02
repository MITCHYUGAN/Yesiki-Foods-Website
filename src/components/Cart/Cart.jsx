import { X } from "lucide-react";
// import { ShoppingCart } from "lucide-react";
import jollofrice from "../../assets/rice_others/JOLLOF-RICE-3000.jpg";

const Cart = ({ setCartActive, ifActive }) => {
  return (
    <section className={`cart ${ifActive}`}>
      <div className="cart_content">
        <section className="cart_items">
        <div className="cart_header">
          <h2>CART</h2>
          <X size={40} className="close_cart_btn" onClick={() => setCartActive("cartClose")} />
        </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_item_img">
              <img src={jollofrice} alt="" />
            </div>
            <div className="cart_item_texts">
              <h4 className="cart_item_name">Jollof Rice</h4>
              <p className="cart_item_price">₦3,500</p>
            </div>
            <div className="cart_item_btns">
              <button className="cart_item_decrease_btn">-</button>
              <p>2</p>
              <button className="cart_item_increase_btn">+</button>
            </div>
          </div>
        </section>
        <section className="cart_checkout_section">
          {/* <div>
                <h4>Subtotal</h4>
                <p>₦10,000</p>
            </div>
            <div>
                <h4>Delivery</h4>
                <p>₦70</p>
            </div> */}
          <div>
            <h2>Total</h2>
            <p>₦10,000</p>
          </div>
          <button className="cart_order_now_btn">Order Now</button>
        </section>

        {/* Where there are no items in cart: */}
        {/* <ShoppingCart />
        <h4>You have not added any items to your cart</h4> */}
      </div>
    </section>
  );
};

export default Cart;
