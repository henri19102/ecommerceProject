import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import NavbarTab from "./NavbarTab";
import LogInTab from "./LogInTab";
import ShoppingCartTab from "./ShoppingCartTab";
import { useUsers } from "../reducers/UserReducer";
import TogglableMenu from "./TogglableMenu";
import NormalMenu from "./NormalMenu";
import {useStyles} from "../../styles/styles"

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
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar className={classes.toolbar} >
          {isMatch ? (
            <TogglableMenu admin={admin} />
          ) : (
            <NormalMenu admin={admin} />
          )}

          <Typography className={classes.header} variant="h4">HAMAZON</Typography>
          {!user && <NavbarTab name={"Sign up"} pathTo={"/signup"} />}
          <ShoppingCartTab />
          <LogInTab />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
