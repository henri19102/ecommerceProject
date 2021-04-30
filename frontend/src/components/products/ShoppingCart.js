import React, { useEffect } from "react";
import { Button, Box } from "@material-ui/core";
import orderService from "../../services/orders";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useOrders } from "../reducers/OrdersReducer";
import { useUsers } from "../reducers/UserReducer";
import {useCart} from '../reducers/CartReducer'
import CartProductView from "./CartProductView";

const ShoppingCart = () => {
  const { cartProducts } = useCart();

  //if (!cartProducts) return <div><p>loading...</p></div>;




  return (
    <div>
      <Box borderRadius={16} className="box" boxShadow="10">
        {cartProducts.map(x=>(
          <CartProductView key={x.productId} product={x}  />
          ))}
          
      
      </Box>
    </div>
  );
};

export default ShoppingCart;
