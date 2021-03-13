import React from "react";
import {
  FormControlLabel,
  FormGroup,
  Switch,
  Button,
  Grid,
  IconButton,
  ButtonGroup,
} from "@material-ui/core";
import { ShoppingCart} from "@material-ui/icons";

const Navbar = () => {
  const [auth, setAuth] = React.useState(true);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <Grid className="menu">
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button>Menu</Button>
        <Button>Products</Button>
        <Button>About</Button>
      </ButtonGroup>
      <IconButton color="primary" aria-label="add to shopping cart">
        <ShoppingCart fontSize="large" />
      </IconButton>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
    </Grid>
  );
};

export default Navbar;
