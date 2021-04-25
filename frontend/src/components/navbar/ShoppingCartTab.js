import React from "react";
import { IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useUsers } from "../reducers/UserReducer";

const ShoppingCartTab = () => {
const user = useUsers()
const history = useHistory()

  const handleClick = () => {
    if (user.loggedUser) {
      history.push("/shoppingcart");
    }
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        color="primary"
        aria-label="add to shopping cart"
      >
        <ShoppingCart fontSize="large" />
      </IconButton>
    </>
  );
};

export default ShoppingCartTab;
