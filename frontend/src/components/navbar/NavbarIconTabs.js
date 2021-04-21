import React from "react";
import {
  Button,
  Grid,
  IconButton,
  ButtonGroup,
  Typography,
  Box,
} from "@material-ui/core";
import { ShoppingCart, LockOpen, Lock } from "@material-ui/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";

const NavbarIconTabs = () => {
    const [auth, setAuth] = React.useState(true);
    const history = useHistory()


    const handleChange = () => {
        if (auth){
            return setAuth(false)
        }
      setAuth(true)
      history.push('/login')
    }


  return (
    <>
      <IconButton color="primary" aria-label="add to shopping cart">
        <ShoppingCart fontSize="large" />
      </IconButton>
      <IconButton onClick={handleChange}>
        {auth === true ? (
          <Typography>
            <LockOpen fontSize="large" style={{ display: "flex" }} />
            logout
          </Typography>
        ) : (
          <Typography>
            <Lock fontSize="large" style={{ display: "flex" }} />
            login
          </Typography>
        )}
      </IconButton>
    </>
  );
};

export default NavbarIconTabs;
