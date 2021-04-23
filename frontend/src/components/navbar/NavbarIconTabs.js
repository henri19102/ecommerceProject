import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { ShoppingCart, LockOpen, Lock } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useUsers } from "../AppDataContext";

const NavbarIconTabs = () => {
  const [auth, setAuth] = React.useState(true);
  const history = useHistory();
  const user = useUsers();
  console.log(user);

  const handleChange = () => {
    if (user) {
      window.localStorage.removeItem("loggedUser");
      setAuth(true);
    }
    setAuth(false);
    history.push("/login");
  };

  return (
    <>
      <IconButton color="primary" aria-label="add to shopping cart">
        <ShoppingCart fontSize="large" />
      </IconButton>
      <IconButton onClick={handleChange}>
        {auth === true ? (
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
