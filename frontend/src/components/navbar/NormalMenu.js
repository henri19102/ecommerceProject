import React from "react";
import { ButtonGroup } from "@material-ui/core";
import NavbarTab from "./NavbarTab";
import AdminTab from "./AdminTab";
import {useStyles} from "../../styles/styles"


const NormalMenu = ({admin}) => {
  const classes = useStyles();
  return (
    <>
        <NavbarTab name={"Frontpage"} pathTo={"/"} />
        <NavbarTab name={"Products"} pathTo={"/products"} />
        <NavbarTab name={"About"} pathTo={"/"} />

      {admin && <AdminTab pathTo={"/admin"} />}
    </>
  );
};

export default NormalMenu;
