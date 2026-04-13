import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = ({ setCartActive, ifActive }) => {
  const { cart, setCart } = useContext(CartContext);

  const total = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity;
  }, 0);

  const increaseQuantity = (itemToIncreaseQuantity) => {
    const newCartItems = cart.map((item) => {
      if (itemToIncreaseQuantity.name === item.name) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(newCartItems);
  };

  const decreaseQuantity = (itemToDecreaseQuantity) => {
    const newCartArray = cart.map((item) => {
      if (itemToDecreaseQuantity.name === item.name) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    const filteredArray = newCartArray.filter((item) => item.quantity > 0);
    setCart(filteredArray);
  };

  const generateOrderMessage = () => {
    if (cart.length === 0) {
      alert("Cannot place order. Cart is empty");
      return;
    }

    const orderMessageFromCart = cart.map((item) => `- ${item.name} x${item.quantity} — ₦${item.price.toLocaleString()}`);
    const message = `Hello YesifikFoods! I'd like to place an order: \n\n${orderMessageFromCart.join("\n")} \n\nTotal: ₦${total.toLocaleString()} \n\nName: [Customer fills this] \nAddress: [Customer fills this]`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348159716937?text=${encodedMessage}`);

    // console.log(message);
  };

  return (
    <section className={`cart ${ifActive}`}>
      <div className="cart_content">
        <section className="cart_items">
          <div className="cart_header">
            <h2>CART</h2>
            <X size={40} className="close_cart_btn" onClick={() => setCartActive("cartClose")} />
          </div>

          {cart.length === 0 ? (
            <div className="empty_state">
              <ShoppingBag size={48} />
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart_item" key={item.name}>
                <div className="cart_item_img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="cart_contents">
                  <div className="cart_item_info">
                    <h4 className="cart_item_name">{item.name}</h4>
                    <p className="cart_item_desc">{item.category || "Fresh & Delicious"}</p>
                  </div>
                  <div className="cart_price_and_btns">
                    <p className="cart_item_price">₦{item.price?.toLocaleString()}</p>
                    <div className="cart_item_btns">
                      <button onClick={() => decreaseQuantity(item)}>
                        <Minus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item)}>
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
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
            <p>₦{total.toLocaleString()}</p>
          </div>
          <button className="cart_order_now_btn" onClick={generateOrderMessage}>
            Order Now
          </button>
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
};

export default Cart;
