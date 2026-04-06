import { useState } from "react";
import CartContext from "./context/CartContext";
import { RouterProvider } from "react-router";
import PropType from "prop-types"

export const Root = ({router}) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

Root.propTypes = {
    router: PropType.object
}