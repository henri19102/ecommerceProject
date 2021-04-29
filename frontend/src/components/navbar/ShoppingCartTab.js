import React from "react";
import { IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useUsers } from "../reducers/UserReducer";
import {useOrders} from '../reducers/OrdersReducer'
import orderService from '../../services/orders'

const ShoppingCartTab = () => {
const user = useUsers()
const orders = useOrders()
const history = useHistory()

  const handleClick = async () => {
    if (user.user && orders.orders) {
      const userOrder = await orderService.getProductCount(user.user.id)
      orders.dispatchOrders({type: 'getAll', payload: userOrder})
      history.push("/shoppingcart");
    }
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        color="primary"
        aria-label="add to shopping cart"
      >
        <ShoppingCart fontSize="large" />
      </IconButton>
    </>
  );
};

export default ShoppingCartTab;
