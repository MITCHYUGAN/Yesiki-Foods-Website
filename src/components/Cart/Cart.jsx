import { X } from "lucide-react";
import PropTypes from 'prop-types';
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = ({ setCartActive, ifActive, total }) => {

  const {cart, setCart} = useContext(CartContext)

  const increaseQuantity = (item) => {
    item.quantity = item.quantity + 1;
    console.log("Cart", cart);
    setCart((prevItems) => [...prevItems]);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      console.log("Do you want to remove this item from the cart?")
      return
    }

    item.quantity = item.quantity - 1;
    console.log("Cart", cart);
    setCart((prevItems) => [...prevItems]);
  };

  return (
    <section className={`cart ${ifActive}`}>
      <div className="cart_content">
        <section className="cart_items">
          <div className="cart_header">
            <h2>CART</h2>
            <X size={40} className="close_cart_btn" onClick={() => setCartActive("cartClose")} />
          </div>

          {cart.length === 0
            ? "Your cart is empty"
            : cart.map((item) => {
                return (
                  <div className="cart_item" key={item.name}>
                    <div className="cart_item_img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="cart_item_texts">
                      <h4 className="cart_item_name">{item.name}</h4>
                      <p className="cart_item_price">₦{item.price}</p>
                    </div>
                    <div className="cart_item_btns">
                      <button className="cart_item_decrease_btn" onClick={() => decreaseQuantity(item)}>
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button className="cart_item_increase_btn" onClick={() => increaseQuantity(item)}>
                        +
                      </button>
                    </div>
                  </div>
                );
              })}

          {}
          {/* <div className="cart_item">
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
          </div> */}
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
            <p>₦{total}</p>
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

Cart.propTypes = {
  setCartActive: PropTypes.func,
  ifActive: PropTypes.string,
  cart: PropTypes.array,
  setCart: PropTypes.func,
  total: PropTypes.number,
}

export default Cart;
