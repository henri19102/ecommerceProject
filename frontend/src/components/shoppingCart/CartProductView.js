import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import { useStyles } from "../../styles/styles";
import { useUsers } from "../reducers/UserReducer";
import { useOrders } from "../reducers/OrdersReducer";
import { useCart } from "../reducers/CartReducer";
import orderService from "../../services/orders";
import AddToCartButton from "../AddToCartButton";

const CartProductView = ({ product }) => {
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

  return (
    <Card className={classes.cardContent} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Typography className={classes.text1}>
          Product:{" "}
          <Box
            component="span"
            fontWeight="fontWeightBold"
          >{`${product.Product.name}`}</Box>
        </Typography>
        <Typography className={classes.text1}>
          Price:{" "}
          <Box
            component="span"
            fontWeight="fontWeightBold"
          >{`${product.Product.price} € `}</Box>
        </Typography>
        <Typography className={classes.text1}>
          Total price:{" "}
          <Box component="span" fontWeight="fontWeightBold">{`${
            Number(product.productCount) * product.Product.price
          } € `}</Box>
        </Typography>
      </CardContent>
      <CardActions>
        <AddToCartButton productId={product.productId} buttonText={"Add"} />
        <Typography
          variant="h6"
          className={classes.green}
        >{`${product.productCount} pcs.`}</Typography>
        <Button
          startIcon={<RemoveIcon />}
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
