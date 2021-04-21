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

const NavbarTab = ({name, pathTo}) => {

  const history = useHistory()


    return (
        <>
            <Button variant="contained" color="primary" size="small" onClick={()=>history.push(pathTo)} >{name}</Button>
        </>
    )
}

export default NavbarTab
