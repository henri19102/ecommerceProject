import React, { useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@material-ui/core";
import CartProductView from "./CartProductView";

import { useUsers } from "../reducers/UserReducer";
import { useCart } from "../reducers/CartReducer";
import orderService from "../../services/orders";
import { useStyles } from "../../styles/styles";
// import CheckoutDialog from "./CheckoutDialog";
import PaypalCheckout from "./PaypalCheckout";
import Highlighted from "../Highlighted";
import { useHistory } from "react-router-dom";

const ShoppingCart = () => {
  const userCart = useCart();
  const history = useHistory();
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
  }, [user]);

  if (!userCart.cartProducts) return <Box>You need to <a className={classes.link} onClick={() => history.push("login")}>login</a>, to view your cart.</Box>;

  const sumAllFromCart = userCart.cartProducts.reduce(
    (a, b) => a + Number(b.productCount) * b.Product.price,
    0
  );

  const sumAllItemsText = () => {
    return sumAllFromCart > 0
      ? `Total price: ${sumAllFromCart} €`
      : "Shopping cart is empty";
  };

  if (sumAllFromCart > 0)
    return (
      <div className={classes.productsPage}>
        <h2 className={classes.container}>Shopping Cart</h2>

        <Box className={classes.products}>
          {userCart.cartProducts.map((x) => (
            <CartProductView key={x.productId} product={x} />
          ))}
        </Box>
        <Card className={classes.cardContent} variant='outlined'>
          <CardContent className={classes.cardContent2}>
            <Typography variant='h6'>{sumAllItemsText()}</Typography>
          </CardContent>
        </Card>
        <Box className={classes.container}>
          <PaypalCheckout totalPrice={sumAllFromCart} />
        </Box>
        {/* <CheckoutDialog /> */}
      </div>
    );
  return (
    <div className={classes.productsPage}>
      <Box className={classes.container}>
        <h2>Shopping Cart</h2>
        <Typography>Shopping cart is empty :(</Typography>
        <p>
          We know our catalog may owerwhelm you, so for starters check out our
        </p>
        <Highlighted/>
      </Box>
    </div>
  );
};

export default ShoppingCart;
