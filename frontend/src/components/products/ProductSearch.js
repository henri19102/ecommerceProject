import React from "react";
import { TextField, Typography } from "@material-ui/core";
import { useStyles } from "../../styles/styles";

const ProductSearch = ({ setName }) => {
  const classes = useStyles();
  return (
    <div style={{ width: "30%" }}>
      <Typography component={"div"}>
        Search:
        <TextField
          id={"searchProduct"}
          className={classes.productSearch}
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          label="Search product"
        />
      </Typography>
    </div>
  );
};

export default ProductSearch;
