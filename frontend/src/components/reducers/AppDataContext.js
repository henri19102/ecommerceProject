import React from "react";
import NotificationReducer from "./NotificationReducer";
import ProductsReducer from "./ProductsReducer";
import UserReducer from "./UserReducer";
import OrdersReducer from './OrdersReducer'

const AppDataContext = ({ children }) => {
  return (
    <>
      <UserReducer>
        <ProductsReducer>
          <NotificationReducer>
            <OrdersReducer>
            {children}
            </OrdersReducer>
          </NotificationReducer>
        </ProductsReducer>
      </UserReducer>
    </>
  );
};

export default AppDataContext;
