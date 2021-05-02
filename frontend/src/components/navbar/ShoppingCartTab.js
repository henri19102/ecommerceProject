import React from "react";
import { IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useUsers } from "../reducers/UserReducer";
import { useOrders } from "../reducers/OrdersReducer";
import { useCart } from "../reducers/CartReducer";
import orderService from "../../services/orders";

const ShoppingCartTab = () => {
  const { user } = useUsers();
  const { orders } = useOrders();
  const userCart = useCart();
  const history = useHistory();

  const showShoppingCart = async () => {
    const userOrders = await orderService.getProductCount(user.id);
    userCart.dispatchCart({ type: "getAll", payload: userOrders });
    history.push("/shoppingcart");
  };

  return (
    <>
      <IconButton
        onClick={showShoppingCart}
        color="primary"
        aria-label="add to shopping cart"
      >
        <ShoppingCart fontSize="large" />
      </IconButton>
    </>
  );
};

export default ShoppingCartTab;
