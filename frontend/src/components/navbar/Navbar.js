import React from "react";
import { ButtonGroup, Box } from "@material-ui/core";
import NavbarTab from "./NavbarTab";
import LogInTab from "./LogInTab";
import ShoppingCartTab from "./ShoppingCartTab";
import { useUsers } from "../reducers/UserReducer";

const Navbar = () => {
  const { user } = useUsers();
  if(!user)return null

  return (
    <Box style={{ textAlign: "center" }}>
      <ButtonGroup>
        <NavbarTab name={"Frontpage"} pathTo={"/"} />
        <NavbarTab name={"Products"} pathTo={"/products"} />
        <NavbarTab name={"About"} pathTo={"/"} />
        {!user && <NavbarTab name={"Sign up"} pathTo={"/signup"} />}
        {user.isAdmin && <NavbarTab name={"admin"} pathTo={"/admin"} /> }
      </ButtonGroup>
      <ShoppingCartTab />
      <LogInTab />
    </Box>
  );
};

export default Navbar;
