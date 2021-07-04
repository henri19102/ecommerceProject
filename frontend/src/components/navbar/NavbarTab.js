import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useStyles} from "../../styles/styles"
import CheckIcon from '@material-ui/icons/Check';
import {useLocation} from 'react-router-dom'


const NavbarTab = ({ name, pathTo, isSelected, ...props }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    
      <Button
      {...props}
      startIcon={location.pathname===pathTo && <CheckIcon/>}
      style={{color:"white"}}
        variant="outlined"
        size="large"
        onClick={() => history.push(pathTo)}
      >
        {name}
      </Button>
  
  );
};

export default NavbarTab;
