import React, { useEffect } from "react";
import { Box, Button, Typography, Card, CardContent } from "@material-ui/core";
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
      <Card className={classes.cardContent}  variant="outlined">
        <CardContent className={classes.cardContent2}  >
      <Typography  variant="h6"  >{`Total price: ${userCart.cartProducts.reduce((a,b)=>a+(Number(b.productCount)*b.Product.price),0)} €`}</Typography>
     </CardContent>
     </Card>

      <Button size="large" variant="contained">
        checkout
      </Button>
    </div>
  );
};

export default ShoppingCart;
