import React from "react";
import NotificationReducer from "./NotificationReducer";
import ProductsReducer from "./ProductsReducer";
import UserReducer from "./UserReducer";
import OrdersReducer from './OrdersReducer'
import CartReducer from './CartReducer'


const AppDataContext = ({ children }) => {


  return (
    <>
      <UserReducer>
        <ProductsReducer>
          <NotificationReducer>
            <OrdersReducer>
              <CartReducer>
                {children}
              </CartReducer>
            </OrdersReducer>
          </NotificationReducer>
        </ProductsReducer>
      </UserReducer>
    </>
  );
};

export default AppDataContext;
