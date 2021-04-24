import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { ShoppingCart, LockOpen, Lock } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useUsers } from "../reducers/UserReducer";


const NavbarIconTabs = () => {
  const history = useHistory();
  const user = useUsers();

  const handleChange = () => {
    if (user.loggedUser) {
      window.localStorage.removeItem("loggedUser");
      user.userDispatch({type: 'logOut'})
    }
    history.push("/login");
  };

  return (
    <>
      <IconButton color="primary" aria-label="add to shopping cart">
        <ShoppingCart fontSize="large" />
      </IconButton>
      <IconButton onClick={handleChange}>
        {user.loggedUser ? (
          <Typography>
            <LockOpen fontSize="large" style={{ display: "flex" }} />
            logout
          </Typography>
        ) : (
          <Typography>
            <Lock fontSize="large" style={{ display: "flex" }} />
            login
          </Typography>
        )}
      </IconButton>
    </>
  );
};

export default NavbarIconTabs;
