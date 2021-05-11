import React from "react";
import { ButtonGroup, Box } from "@material-ui/core";
import NavbarTab from "./NavbarTab";
import LogInTab from "./LogInTab";
import ShoppingCartTab from "./ShoppingCartTab";
import AdminTab from "./AdminTab";
import { useUsers } from "../reducers/UserReducer";

const Navbar = () => {
  const { user } = useUsers();
  let admin

  if(user) {
    user.isAdmin ? admin = true : admin = false;
  }
  
console.log(admin)

  return (
    <Box style={{ textAlign: "center" }}>
      <ButtonGroup>
        <NavbarTab name={"Frontpage"} pathTo={"/"} />
        <NavbarTab name={"Products"} pathTo={"/products"} />
        <NavbarTab name={"About"} pathTo={"/"} />
        {!user && <NavbarTab name={"Sign up"} pathTo={"/signup"} />}
      </ButtonGroup>
      <ShoppingCartTab />
      <LogInTab />
      {admin && <AdminTab pathTo={"/admin"} />  } 
    </Box>
  );
};

export default Navbar;
