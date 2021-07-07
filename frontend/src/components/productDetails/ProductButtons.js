import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import orderService from "../../services/orders";
import { useOrders } from "../reducers/OrdersReducer";
import { useUsers } from "../reducers/UserReducer";
import { useCart } from "../reducers/CartReducer";

const ProductButtons = ({ id }) => {
  const { user } = useUsers();
  const orders = useOrders();
  const userCart = useCart();

  const addProductToCart = async () => {
    const createOrder = await orderService.addToCart(id, user.id);
    orders.dispatchOrders({ type: "add", payload: createOrder });
    const userOrders = await orderService.getProductCount(user.id);
    userCart.dispatchCart({ type: "getAll", payload: userOrders });
  };

  return (
    <>
      <CardActions>
        <Button
          startIcon={<AddIcon />}
          color="primary"
          variant="contained"
          onClick={addProductToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </>
  );
};

export default ProductButtons;
