import React from "react";
import { ButtonGroup, Box } from "@material-ui/core";
import NavbarTab from "./NavbarTab";
import NavbarIconTabs from "./NavbarIconTabs";

const Navbar = () => {
  return (
    <Box style={{ textAlign: "center" }}>
      <ButtonGroup>
        <NavbarTab name={"Frontpage"} pathTo={"/"} />
        <NavbarTab name={"Products"} pathTo={"/products"} />
        <NavbarTab name={"About"} pathTo={"/"} />
        <NavbarTab name={"Sign up"} pathTo={"/signup"} />
      </ButtonGroup>
      <NavbarIconTabs />
    </Box>
  );
};

export default Navbar;
