import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { useStyles } from "../../../../styles/styles";
import { useUsers } from "../../../reducers/UserReducer";
import ShippingDetails from "./ShippingDetails";
import LatestReviews from "./LatestReviews";
import ProfilePicture from "./ProfilePicture";

const MyAccount = () => {
  const { user } = useUsers();
  const classes = useStyles();

  if (user === null) return <Box>Loading.</Box>;
  console.log(user);
  return (
    <Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2 className={classes.container} style={{ fontWeight: "bold" }}>
              Profile of {user.name}
            </h2>
            {user.createdAt && <h3>Member since {user.createdAt}</h3>}
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h4>Shipping details</h4>
              <ShippingDetails user={user} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h4>Profile Picture</h4>
              <ProfilePicture user={user}/>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>Viimeksi katsottu</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>Ostoskorisi hinta</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>Suosituimmat tuotteesi</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              Nämä sopisivat sinulle kanssa?
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <h2 className={classes.container} style={{ fontWeight: "bold" }}>
              Latest Reviews
            </h2>
            <Paper className={classes.paper}>
              <LatestReviews user={user} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default MyAccount;
