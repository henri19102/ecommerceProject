import React from "react";
import { AppBar, Toolbar, useMediaQuery, useTheme } from "@material-ui/core";
import LogInTab from "./LogInTab";
import ShoppingCartTab from "./ShoppingCartTab";
import { useUsers } from "../reducers/UserReducer";
import TogglableMenu from "./TogglableMenu";
import NormalMenu from "./NormalMenu";
import { useStyles } from "../../styles/styles";
import InnerUpperBar from "./InnerUpperBar";

const Navbar = () => {
  const { user } = useUsers();
  const theme = useTheme();
  const classes = useStyles();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  let admin;

  if (user) {
    user.isAdmin ? (admin = true) : (admin = false);
  }

  return (
    <>
      <AppBar position='sticky'>
        {isMatch === false && (<InnerUpperBar />)}
        <Toolbar className={classes.toolbar}>
          {isMatch ? (
            <TogglableMenu admin={admin} user={user} />
          ) : (
            <NormalMenu admin={admin} user={user} />
          )}
          <ShoppingCartTab />
          <LogInTab />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
