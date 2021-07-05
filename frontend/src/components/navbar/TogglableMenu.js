import React, { useState } from "react";
import { Menu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NavbarTab from "./NavbarTab";
import AdminTab from "./AdminTab";
import { useStyles } from "../../styles/styles";

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
        <MenuItem>
          <NavbarTab className={classes.blue} name={"Frontpage"} pathTo={"/"} />
        </MenuItem>
        <MenuItem>
          <NavbarTab
            className={classes.blue}
            name={"Products"}
            pathTo={"/products"}
          />
        </MenuItem>
        {admin && (
          <MenuItem>
            <AdminTab className={classes.blue} pathTo={"/admin"} />
          </MenuItem>
        )}
        {!user && (
          <MenuItem>
            <NavbarTab
              className={classes.blue}
              name={"Sign up"}
              pathTo={"/signup"}
            />
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default TogglableMenu;
