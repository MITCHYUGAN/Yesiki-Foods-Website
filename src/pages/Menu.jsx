import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import menu from "../Data/data";
import { useEffect } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Menu = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [category, setCategory] = useState("all");
  const { cart, setCart } = useContext(CartContext);

  // Filter menu By category
  const filterMenu = (category) => {
    if (category === "all") {
      setMenuItems(menu); // Setting state triggers a Re-render
      return menu;
    } else {
      const filteredItems = menu.filter((item) => item.category === category);
      setMenuItems(filteredItems); // This would run on every render even when the category does not change. because we are setting state.
      return filteredItems;
    }
  };

  useEffect(() => {
    filterMenu(category);
  }, [category]); // Only run the code inside of that useEffect when the category changes, not on every render

  // Add to Cart Logic
  const addToCart = (item) => {
    // cart.includes(item.name)

    const hasItemInCart = cart.some((cartItem) => cartItem.name === item.name);

    // Add item to cart if it doesn't exist
    if (!hasItemInCart) {
      setCart((prevItems) => [...prevItems, { ...item }]);
      return; // Stop running the function here when it exist
    }

    // Increase the quantity of the particular item if it already exist
    const newArrayAfterIncreasingQuantity = cart.map((cartItem) => {
      if (cartItem.name === item.name) {
        return { ...item, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });

    setCart(newArrayAfterIncreasingQuantity);
  };

  return (
    <div className="menuPage">
      <Header cart={cart} setCart={setCart} />
      <section className="menuHeader">
        <div className="menuHeaderTexts">
          <p className="menuHeaderTextsfirstP">OUR MENU</p>
          <h1 className="menuHeaderh1">YesikiFoods Menu</h1>
          <p className="menuHeaderTextsP">Fresh, Nigerian-inspired meals delivered with love</p>
        </div>
      </section>
      <div className="menuContent">
        <section className="menuContentFilterWrapper">
          <div className="menuContentFilter">
            <button className={category === "all" ? "menufilterButton menufilterButtonActive" : "menufilterButton"} onClick={() => setCategory("all")}>
              All
            </button>
            <button className={category === "rice_and_more" ? "menufilterButton menufilterButtonActive" : "menufilterButton"} onClick={() => setCategory("rice_and_more")}>
              Rice & More
            </button>
            <button className={category === "swallow_and_soup" ? "menufilterButton menufilterButtonActive" : "menufilterButton"} onClick={() => setCategory("swallow_and_soup")}>
              Swallow & soup
            </button>
            <button className={category === "protein" ? "menufilterButton menufilterButtonActive" : "menufilterButton"} onClick={() => setCategory("protein")}>
              Protein
            </button>
            <button className={category === "drinks" ? "menufilterButton menufilterButtonActive" : "menufilterButton"} onClick={() => setCategory("drinks")}>
              Drinks
            </button>
            <button className={category === "snack_and_ice_cream" ? "menufilterButton menufilterButtonActive" : "menufilterButton"} onClick={() => setCategory("snack_and_ice_cream")}>
              Snacks & Ice cream
            </button>
            <button className={category === "alcohol" ? "menufilterButton menufilterButtonActive" : "menufilterButton"} onClick={() => setCategory("alcohol")}>
              Alcohol
            </button>
          </div>
        </section>
        <div className="all_items">
          {menuItems.length === 0
            ? "Items of this category is not available"
            : menuItems.map((item) => {
                return (
                  <div key={item.name} className="item">
                    <div className="item_img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_name">{item.name}</h3>
                      <p className="item_price">₦{item.price.toLocaleString()}</p>
                      <div className="item_buttons">
                        <button className="item_order_now_btn">Order now</button>
                        <button className="item_add_to_cart_btn" title="Add to cart" onClick={() => addToCart(item)}>
                          <ShoppingCartIcon /> +{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
