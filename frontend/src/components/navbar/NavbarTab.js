import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const NavbarTab = ({ name, pathTo }) => {
  const history = useHistory();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => history.push(pathTo)}
      >
        {name}
      </Button>
    </>
  );
};

export default NavbarTab;
