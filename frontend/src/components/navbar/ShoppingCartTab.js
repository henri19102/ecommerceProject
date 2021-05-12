import React from "react";
import { IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useUsers } from "../reducers/UserReducer";
import { useOrders } from "../reducers/OrdersReducer";
import Badge from "@material-ui/core/Badge";
import { useStyles } from "../../styles/styles"

const ShoppingCartTab = () => {
  const classes = useStyles();
  const { user } = useUsers();
  const { orders } = useOrders();
  const history = useHistory();

  if (!orders) return null;

  const countContent = () => {
    if (user) return orders.filter((x) => x.userId === user.id).length;
  };

  return (
    <>
      <IconButton
      className={classes.white}
        onClick={() => history.push("/shoppingcart")}
        aria-label="add to shopping cart"
      >
        <Badge color="secondary" badgeContent={countContent()}>
          <ShoppingCart fontSize="large" />
        </Badge>
      </IconButton>
    </>
  );
};

export default ShoppingCartTab;
