import React from "react";
import NotificationReducer from "./NotificationReducer";
import ProductsReducer from "./ProductsReducer";
import UserReducer from "./UserReducer";
import OrdersReducer from "./OrdersReducer";
import CartReducer from "./CartReducer";
import ReviewsReducer from "./ReviewsReducer";
import RatingReducer from "./RatingsReducer";
import LikesReducer from "./LikesReducer";

const AppDataContext = ({ children }) => {
  return (
    <>
      <UserReducer>
        <ProductsReducer>
          <NotificationReducer>
            <OrdersReducer>
              <CartReducer>
                <ReviewsReducer>
                  <RatingReducer>
                    <LikesReducer>{children}</LikesReducer>
                  </RatingReducer>
                </ReviewsReducer>
              </CartReducer>
            </OrdersReducer>
          </NotificationReducer>
        </ProductsReducer>
      </UserReducer>
    </>
  );
};

export default AppDataContext;
