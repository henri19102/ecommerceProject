import React, { useEffect } from "react";
import { Button, Box } from "@material-ui/core";
import orderService from "../../services/orders";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useOrders } from "../reducers/OrdersReducer";
import { useUsers } from "../reducers/UserReducer";
import CartProductView from "./CartProductView";

const ShoppingCart = () => {
  const {orders} = useOrders();
  const { user } = useUsers();

  if (!orders) return null;
  if (!user) return null;




  return (
    <div>
      <Box borderRadius={16} className="box" boxShadow="10">
        {orders.map(x=>(
          <CartProductView key={x} product={x}  />
          ))}
          
      
      </Box>
    </div>
  );
};

export default ShoppingCart;
