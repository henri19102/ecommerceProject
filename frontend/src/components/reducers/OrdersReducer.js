import React, { useContext, useEffect, useReducer } from "react";
import orderService from "../../services/orders";

export const OrdersContext = React.createContext();

export const useOrders = () => {
  return useContext(OrdersContext);
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "orders":
      return action.payload;
    default:
      return state;
  }
};

const OrdersReducer = ( {children}) => {
  const [orders, dispatchOrders] = useReducer(orderReducer, null);


  useEffect(() => {
    orderService.getAll().then((x) => dispatchOrders({ type: "orders", payload: x }));
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
