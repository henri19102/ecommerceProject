import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import { useStyles } from "../../styles/styles";
import { useUsers } from "../reducers/UserReducer";
import ShippingDetails from "./ShippingDetails";
import LatestReviews from "./LatestReviews";
import ProfilePicture from "./ProfilePicture";
import { useCart } from "../reducers/CartReducer";
import orderService from "../../services/orders";
import AccountCart from "./AccountCart";
import MyAccountEdit from "./MyAccountEdit";
import Recommended from "./Recommended";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MyAccount = () => {
  const { user } = useUsers();
  const [edit, setEdit] = useState(false);
  const history = useHistory();
  const userCart = useCart();
  const classes = useStyles();

  const changeEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    const fetchCart = async () => {
      const joku = await orderService.getProductCount(user.id);
      userCart.dispatchCart({ type: "getAll", payload: joku });
    };

    if (user) {
      fetchCart();
    }
  }, [user]);


  if (user === null || !userCart.cartProducts) return <Box>Loading.</Box>;
  return (
    <Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item={true} xs={12}>
            <h2 className={classes.container} style={{ fontWeight: "bold" }}>
              Profile of {user.name} {user.lastname}
            </h2>
            {user.createdAt && <h3>Member since {user.createdAt}</h3>}
          </Grid>
          <Grid xs={6}>
            <Paper className={classes.paper}>
              <h4>Shipping details</h4>
              {!edit && (
                <Button
                  onClick={() => changeEdit()}
                  variant='contained'
                  color='primary'
                >
                  Edit Details
                </Button>
              )}
              {!edit ? (
                <ShippingDetails user={user} />
              ) : (
                <MyAccountEdit changeEdit={changeEdit} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h4>Profile Picture</h4>
              <ProfilePicture user={user} />
            </Paper>
          </Grid>
          <Grid item xs={12} ms={6}>
            <Paper className={classes.paper}>
              <h3>Your Cart</h3>
              <Grid container spacing={3}>
                <Grid item xs={12} ms={6}>
                  {userCart.cartProducts.length > 0 ? (
                    userCart.cartProducts.map((x) => (
                      <AccountCart key={x.productId} product={x} />
                    ))
                  ) : (
                    <Box>You shopping cart is empty :(</Box>
                  )}
                </Grid>
                <Grid item xs={12} ms={6}>
                  Grand total of:
                  <br />
                  <strong>
                    {userCart.cartProducts.reduce(
                      (a, b) => a + Number(b.productCount) * b.Product.price,
                      0
                    )}
                    €
                  </strong>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => {
                      history.push("/shoppingcart");
                    }}
                  >
                    Proceed to Cart
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} ms={6}>
            <Paper className={classes.paper}>
              <h3>Recommended for you</h3>
              <Recommended classes={classes} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <h2 className={classes.container} style={{ fontWeight: "bold" }}>
              Latest Reviews
            </h2>
            <Paper className={classes.paper}>
              <LatestReviews key={user.id} user={user} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default MyAccount;
