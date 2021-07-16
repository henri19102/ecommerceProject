/* eslint-disable indent */
import React, { useContext, useEffect, useReducer } from "react";
import orderService from "../../services/orders";

export const OrdersContext = React.createContext();

export const useOrders = () => {
  return useContext(OrdersContext);
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "getAll":
      return action.payload;
    case "userOrders":
      return action.userPayload;
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((x) => x.id !== action.deleteId);
    case "deleteAll":
      return [...state.filter((x) => !action.payload.includes(x))];
    default:
      return state;
  }
};

const OrdersReducer = ({ children }) => {
  const [orders, dispatchOrders] = useReducer(orderReducer, null);

  useEffect(() => {
    orderService
      .getAll()
      .then((x) => dispatchOrders({ type: "getAll", payload: x }));
  }, []);

  return (
    <>
      <OrdersContext.Provider
        value={{ orders: orders, dispatchOrders: dispatchOrders }}
      >
        {children}
      </OrdersContext.Provider>
    </>
  );
};

export default OrdersReducer;
