import React, { useContext, useEffect, useReducer } from "react";
import orderService from "../../services/orders";
import {useUsers} from './UserReducer'

export const OrdersContext = React.createContext();

export const useOrders = () => {
  return useContext(OrdersContext);
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "getAll":
        return action.payload;
    case "add":
        return [...state, action.payload];
    case "delete":
        return [...state.filter(x=>x.id !== action.deleteId)];
    default:
        return state;
  }
};

const OrdersReducer = ( {children}) => {
  const [orders, dispatchOrders] = useReducer(orderReducer, null);


  useEffect(() => {
    orderService.getAll().then((x) => dispatchOrders({ type: "getAll", payload: x }));
  }, []);

  console.log(orders)

  return (
    <>
      <OrdersContext.Provider value={{ orders: orders, ordersDispatch: dispatchOrders }}>
        {children}
      </OrdersContext.Provider>
    </>
  );
};

export default OrdersReducer;
