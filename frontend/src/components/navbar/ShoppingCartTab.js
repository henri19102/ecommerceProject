import React, {useState, useEffect} from "react";
import { IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useUsers } from "../reducers/UserReducer";
import { useOrders } from "../reducers/OrdersReducer";
import { useCart } from "../reducers/CartReducer";
import orderService from "../../services/orders";
import Badge from "@material-ui/core/Badge";

const ShoppingCartTab = () => {
  const { user } = useUsers();
  const { orders } = useOrders();
  const userCart = useCart();
  const history = useHistory();

  if(!orders)return null

  const showShoppingCart = async () => {
    const userOrders = await orderService.getProductCount(user.id);
    userCart.dispatchCart({ type: "getAll", payload: userOrders });
    history.push("/shoppingcart");
  };

  const countContent = () => {
    return orders.filter(x=>x.userId === user.id).length
  }


  return (
    <>
      <IconButton
        onClick={showShoppingCart}
        color="primary"
        aria-label="add to shopping cart"
      >
        <Badge color="secondary" badgeContent={countContent()} >
        <ShoppingCart fontSize="large" />
        </Badge>
      </IconButton>
    </>
  );
};

export default ShoppingCartTab;
