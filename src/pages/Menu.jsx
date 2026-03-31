import Header from "../components/Header/Header";
import menu from "../Data/data";

console.log("Menu", menu);

const riceItem = menu.filter((item) => item.category === "rice");
console.log("riceItem", riceItem);

const filterRice = () => {
  
}

const Menu = () => {
  return (
    <div className="menuPage">
      <Header />
      <section className="menuHeader">
        <h1 className="menuHeaderh1">YesikiFoods Menu</h1>
      </section>
      <div className="menuContent">
        <section className="menuContentFilter">
          <button className="menufilterButton menufilterButtonActive">All</button>
          <button className="menufilterButton" onClick={() => filterRice}>Rice & More</button>
          <button className="menufilterButton">Swallow & soup</button>
          <button className="menufilterButton">Protein</button>
          <button className="menufilterButton">Drinks</button>
          <button className="menufilterButton">Snacks & Ice cream</button>
          <button className="menufilterButton">Alcohol</button>
        </section>
        <div className="menuContentGrid">
          {menu.map((item) => {
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
