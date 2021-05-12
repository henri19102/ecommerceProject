import React, { useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import CartProductView from "./CartProductView";
import { useUsers } from "../reducers/UserReducer";
import { useCart } from "../reducers/CartReducer";
import orderService from "../../services/orders";
import {useStyles} from "../../styles/styles"


const ShoppingCart = () => {
  //#region 
  const userCart = useCart();
  const { user } = useUsers();
  const classes = useStyles();

  useEffect(() => {
    const fetchCart = async () => {
      const joku = await orderService.getProductCount(user.id);
      userCart.dispatchCart({ type: "getAll", payload: joku });
    };

    if (user) {
      fetchCart();
    }
  }, [userCart, user]);

  if (!userCart.cartProducts) return null;
//#endregion
  return (
    <div  className={classes.productsPage} >
      <Box className={classes.products} >
        {userCart.cartProducts.map((x) => (
          <CartProductView key={x.productId} product={x} />
        ))}
      </Box>
      <Button size="large" variant="contained">
        checkout
      </Button>
    </div>
  );
};

export default ShoppingCart;
