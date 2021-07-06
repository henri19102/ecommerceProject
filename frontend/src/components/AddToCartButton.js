import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import orderService from "../services/orders";
import { useOrders } from "./reducers/OrdersReducer";
import { useUsers } from "./reducers/UserReducer";
import { useCart } from "./reducers/CartReducer";


const AddToCartButton = ({productId, buttonText}) => {

  const { user } = useUsers();
  const orders = useOrders();
  const userCart = useCart();

  const addProductToCart = async () => {
    const createOrder = await orderService.addToCart(productId, user.id);
    orders.dispatchOrders({ type: "add", payload: createOrder });
    const userOrders = await orderService.getProductCount(user.id);
    userCart.dispatchCart({ type: "getAll", payload: userOrders });
  };


  return (
    <>
      <CardActions>
      <Button
          startIcon={<AddIcon/>}
            color="primary"
            variant="contained"
            onClick={addProductToCart}
          >
            {buttonText}
          </Button>
      </CardActions>
    </>
  );
};

export default AddToCartButton;