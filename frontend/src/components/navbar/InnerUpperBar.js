import React, { useState } from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import { useStyles } from "../../styles/styles";
import { storage } from "../admin/users/account/firebase";
import { useProducts } from "../reducers/ProductsReducer";
import { useHistory } from "react-router-dom";

const InnerUpperBar = () => {
  const classes = useStyles();
  const [imageUrl, setimageUrl] = useState(null);
  const { products } = useProducts();
  const history = useHistory();

  if (!products) return null;

  const categoryArray = products.map(
    (x) => (x = { value: x.category, label: x.category })
  );
  const newArray = [...categoryArray, { value: "All", label: "All" }];
  const uniqueArray = (a) =>
    [...new Set(a.map((o) => JSON.stringify(o)))].map((s) => JSON.parse(s));

  const options = uniqueArray(newArray);

  const CategoryNavItem = ({ category }) => {
    return (
      <Button
        onClick={() =>
          history.push({
            pathname: "/products",
            state: { category: category.value }
          })
        }
        className={classes.appBarItem}
      >
        {category.value}
      </Button>
    );
  };

  const getLogo = () => {
    storage
      .ref("images/logo/HamaZon.png")
      .getDownloadURL()
      .then((url) => setimageUrl(url));
  };

  getLogo();

  return (
    <Box>
      <Grid container className={classes.appBar} spacing={2}>
        <Grid item xs={2}>
          <img src={imageUrl} height='50vw' />
        </Grid>
        <Typography className={classes.header} variant='h6'>
          Shop By Gategory
        </Typography>
        <Grid item xs={4}>
          {options.map((x) => (
            <CategoryNavItem key={x.label} category={x} />
          ))}
        </Grid>
        <Grid item xs={2} className={classes.legal}>
          <Typography variant='caption'>
            Tegridy Inc. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InnerUpperBar;
