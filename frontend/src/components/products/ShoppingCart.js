import React, { useEffect } from "react";
import { Button, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useOrders } from "../reducers/OrdersReducer";
import { useUsers } from "../reducers/UserReducer";
import CartProductView from "./CartProductView";

const ShoppingCart = () => {
  const userOrd = useOrders();
  const { loggedUser } = useUsers();

  if (!userOrd.orders) return null;

  const filteredOrders = userOrd.orders.filter(
    (x) => x.userId === loggedUser.id
  );
  const joku = filteredOrders.map((x) => x.productId);
  let counts = {};
  joku.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  const product = Object.entries(counts);

  return (
    <div>
      <Box borderRadius={16} className="box" boxShadow="10">
        {product.map((x) => (
          <CartProductView key={x} value={x} />
        ))}
      </Box>
    </div>
  );
};

export default ShoppingCart;
