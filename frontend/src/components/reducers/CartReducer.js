import React, { useContext, useReducer } from "react";

export const CartContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "getAll":
      return action.payload;
    default:
      return state;
  }
};

const CartReducer = ({ children }) => {
  const [cartProducts, dispatchCart] = useReducer(cartReducer, null);

  return (
    <>
      <CartContext.Provider
        value={{ cartProducts: cartProducts, dispatchCart: dispatchCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartReducer;
