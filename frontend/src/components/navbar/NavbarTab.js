import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useStyles} from "../../styles/styles"


const NavbarTab = ({ name, pathTo }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    
      <Button
      className={classes.white}
        variant="outlined"
        size="large"
        onClick={() => history.push(pathTo)}
      >
        {name}
      </Button>
  
  );
};

export default NavbarTab;
