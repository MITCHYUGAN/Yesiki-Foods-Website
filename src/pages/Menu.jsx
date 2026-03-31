import { useState } from "react";
import Header from "../components/Header/Header";
import menu from "../Data/data";
import { useEffect } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [category, setCategory] = useState("all");

  const filterMenu = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return menu;
    } else {
      const filteredItems = menu.filter((item) => item.category === category);
      setMenuItems(filteredItems);
      return filteredItems;
    }
  };

  useEffect(() => {
    filterMenu(category);
  }, [category]);

  return (
    <div className="menuPage">
      <Header />
      <section className="menuHeader">
        <h1 className="menuHeaderh1">YesikiFoods Menu</h1>
      </section>
      <div className="menuContent">
        <section className="menuContentFilter">
          <button className="menufilterButton menufilterButtonActive" onClick={() => setCategory("all")}>
            All
          </button>
          <button className="menufilterButton" onClick={() => setCategory("rice_and_more")}>
            Rice & More
          </button>
          <button className="menufilterButton" onClick={() => setCategory("swallow_and_soup")}>
            Swallow & soup
          </button>
          <button className="menufilterButton" onClick={() => setCategory("protein")}>
            Protein
          </button>
          <button className="menufilterButton" onClick={() => setCategory("drinks")}>
            Drinks
          </button>
          <button className="menufilterButton" onClick={() => setCategory("snack_and_ice_cream")}>
            Snacks & Ice cream
          </button>
          <button className="menufilterButton" onClick={() => setCategory("alcohol")}>
            Alcohol
          </button>
        </section>
        <div className="menuContentGrid">

          {menuItems.length === 0 ? "Items of this category is not available" : menuItems.map((item) => {
            return (
              <div key={item.name} className="menuContentCard">
                <div className="menuContentCardImg">
                  <img src={item.img} alt="" />
                </div>
                <div className="menuCardContent">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <div>
                    <button>Order now</button>
                    <button>Add to Cart +</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
