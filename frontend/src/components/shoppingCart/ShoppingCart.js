import React from "react";
import { Box, Button } from "@material-ui/core";
import { useCart } from "../reducers/CartReducer";
import CartProductView from "./CartProductView";

const ShoppingCart = () => {
  const { cartProducts } = useCart();

  if (!cartProducts) return null;

  return (
    <div>
      <Box borderRadius={16} className="box" boxShadow="10">
        {cartProducts.map((x) => (
          <CartProductView key={x.productId} product={x} />
        ))}
      </Box>
        <Button size='large' variant="contained" >checkout</Button>
    </div>
  );
};

export default ShoppingCart;
