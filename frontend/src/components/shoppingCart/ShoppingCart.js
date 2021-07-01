import React, { useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@material-ui/core";
import CartProductView from "./CartProductView";
import { useUsers } from "../reducers/UserReducer";
import { useCart } from "../reducers/CartReducer";
import orderService from "../../services/orders";
import {useStyles} from "../../styles/styles"
import CheckoutDialog from './CheckoutDialog'


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
  }, [user]);

  if (!userCart.cartProducts) return null;

  const sumAllFromCart = userCart.cartProducts.reduce((a,b)=>a+(Number(b.productCount)*b.Product.price),0)


  const sumAllItemsText = () => {
    return sumAllFromCart > 0 ? `Total price: ${sumAllFromCart}` : `Shopping cart is empty`
  }

  
//#endregion
  return (
    <div  className={classes.productsPage} >
      <Box className={classes.products} >
        {userCart.cartProducts.map((x) => (
          <CartProductView key={x.productId} product={x} />
        ))}
      </Box>
      <Card className={classes.cardContent}  variant="outlined">
        <CardContent className={classes.cardContent2}  >
      <Typography  variant="h6"  >{sumAllItemsText()}</Typography>
     </CardContent>
     </Card>
    {sumAllFromCart > 0 && <CheckoutDialog />}
    </div>
  );
};

export default ShoppingCart;
