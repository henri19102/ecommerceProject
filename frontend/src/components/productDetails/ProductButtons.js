import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const ProductButtons = () => {
  return (
    <>
      <CardActions>
      <Button
          startIcon={<AddIcon/>}
            color="primary"
            variant="contained"
          >
            Add to cart
          </Button>
      </CardActions>
    </>
  );
};

export default ProductButtons;
