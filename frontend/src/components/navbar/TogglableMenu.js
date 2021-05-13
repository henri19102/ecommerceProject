import React, { useState } from "react";
import { Menu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarTab from "./NavbarTab";
import AdminTab from "./AdminTab";
import {useStyles} from "../../styles/styles"


const TogglableMenu = ({ admin, user }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuIcon

        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      
        <div className={classes.blue} >
          <NavbarTab name={"Frontpage"} pathTo={"/"} />
          <NavbarTab name={"Products"} pathTo={"/products"} />
          <NavbarTab name={"About"} pathTo={"/"} />
        {admin && <AdminTab pathTo={"/admin"} />}
        {!user && <NavbarTab name={"Sign up"} pathTo={"/signup"} />}
        </div>
      </Menu>
    </>
  );
};

export default TogglableMenu;
