import React from "react";
import { Box } from "@material-ui/core";

const AccountCart = ({ product }) => {
  return (
    <Box>
      ({product.productCount}) {product.productCount > 1 ? "pcs" : "pc"} of
      {product.Product.name} {`${product.Product.price} € `}
    </Box>
  );
};

export default AccountCart;
