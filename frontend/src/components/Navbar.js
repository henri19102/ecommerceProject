import React from "react";
import {
  Button,
  Grid,
  IconButton,
  ButtonGroup,
  Typography
} from "@material-ui/core";
import { ShoppingCart, LockOpen, Lock} from "@material-ui/icons";

const Navbar = () => {
  const [auth, setAuth] = React.useState(true);

  const handleChange = () => {
    auth === true ? setAuth(false) : setAuth(true)
  };

  

  return (
    <Grid className="menu">
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button>Frontpage</Button>
        <Button>Products</Button>
        <Button>About</Button>
        <Button>Sign Up</Button>

      </ButtonGroup>
      <IconButton color="primary" aria-label="add to shopping cart">
        <ShoppingCart fontSize="large" />
      </IconButton>
     <IconButton onClick={handleChange} >
       {auth === true ?  
       <Typography><LockOpen fontSize="large" style={{display: 'flex'}}  />logout</Typography>  :
       <Typography><Lock fontSize="large" style={{display: 'flex'}}  />login</Typography> 
       }
      
     </IconButton>
    </Grid>
  );
};

export default Navbar;
