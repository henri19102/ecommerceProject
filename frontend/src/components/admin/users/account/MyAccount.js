import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { useStyles } from "../../../../styles/styles";
import { useUsers } from "../../../reducers/UserReducer";
import ShippingDetails from "./ShippingDetails";

const MyAccount = () => {
  const { user } = useUsers();
  const classes = useStyles();

  if (user === null) return <Box>Loading.</Box>;
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
              <h4>Profile Picture</h4>
              TÄHÄN DEFAULT IMAGE TAI KÄYTTJÄN KAUNIIT KASVOT
              <input type='file' accept='image/*' multiple='false' />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h4>Shipping details</h4>
              <ShippingDetails user={user} />
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
              You better eat a reality sandwich before you walk back in that
              boardroom ramp up. We need a paradigm shift can you champion this
              but radical candor but this is our north star design.
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default MyAccount;
