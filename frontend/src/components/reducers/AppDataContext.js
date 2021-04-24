import React from "react";
import NotificationReducer from "./NotificationReducer";
import ProductsReducer from "./ProductsReducer";
import UserReducer from "./UserReducer";

const AppDataContext = ({ children }) => {
  return (
    <>
      <UserReducer>
        <ProductsReducer>
          <NotificationReducer>{children}</NotificationReducer>
        </ProductsReducer>
      </UserReducer>
    </>
  );
};

export default AppDataContext;
