import React from "react";
import {Card, CardActions, CardContent, Button, Typography, Badge } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';
import { useStyles } from "../../styles/styles";
import { useUsers } from "../reducers/UserReducer";
import { useOrders } from "../reducers/OrdersReducer";
import { useCart } from "../reducers/CartReducer";
import orderService from "../../services/orders";

const CartProductView = ({ product }) => {
  //#region 
  const classes = useStyles();
  const { user } = useUsers();
  const orders = useOrders();
  const userCart = useCart();

  if (!product) return null;

  const removeProductFromCart = async () => {
    const deleteObj = orders.orders.find(
      (x) => x.userId === user.id && x.productId === product.productId
    );
    const id = deleteObj.id;
    await orderService.removeProductFromCart(id);
    orders.dispatchOrders({ type: "delete", deleteId: id });
    const userOrders = await orderService.getProductCount(user.id);
    userCart.dispatchCart({ type: "getAll", payload: userOrders });
  };

  const addProductToCart = async () => {
    const createOrder = await orderService.addToCart(
      product.productId,
      user.id
    );
    orders.dispatchOrders({ type: "add", payload: createOrder });
    const userOrders = await orderService.getProductCount(user.id);
    userCart.dispatchCart({ type: "getAll", payload: userOrders });
  };

//#endregion
  return (
      <Card className={classes.productCard}  variant="outlined">
        <CardContent>
          <Typography gutterBottom>Product:</Typography>
          <Typography>{`${product.Product.name}`}</Typography>
          <Typography >Price:</Typography>
          <Typography>
            {`${product.Product.price} € `}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button
          startIcon={<AddIcon/>}
            onClick={addProductToCart}
            color="primary"
            variant="contained"
            size="small"
          >
            Add
          </Button>
          <Button variant="outlined"  className={classes.green}>{`${product.productCount} pcs.`}</Button>
          <Button
          startIcon={<RemoveIcon/>}
            onClick={removeProductFromCart}
            color="secondary"
            variant="contained"
            size="small"
          >
            Remove
          </Button>
        </CardActions>
      </Card>
  );
};

export default CartProductView;
