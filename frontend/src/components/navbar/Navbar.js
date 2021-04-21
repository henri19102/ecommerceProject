import React from "react";
import {
  Button,
  Grid,
  IconButton,
  ButtonGroup,
  Typography, Box
} from "@material-ui/core";
import { ShoppingCart, LockOpen, Lock} from "@material-ui/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams, useHistory
} from "react-router-dom";
import NavbarTab from './NavbarTab'
import NavbarIconTabs from './NavbarIconTabs'

const Navbar = () => {

  return (
    <Box style={{textAlign: "center"}} >
      <ButtonGroup >
        <NavbarTab name={'Frontpage'} pathTo={'/'} />
        <NavbarTab name={'Products'} pathTo={'/products'} />
        <NavbarTab name={'About'} pathTo={'/'} />
        <NavbarTab name={'Sign up'} pathTo={'/signup'} />
      </ButtonGroup>
      <NavbarIconTabs/>
    </Box>
  );
};

export default Navbar;
