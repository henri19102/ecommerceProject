import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const ProductButtons = () => {
  return (
    <>
      <CardActions>
        <Button variant="contained" size="small">
          Add to Cart
        </Button>
      </CardActions>
    </>
  );
};

export default ProductButtons;
