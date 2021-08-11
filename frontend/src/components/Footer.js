import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { useStyles } from "../styles/styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box m={1} className={classes.footer}>
      <h6>About</h6>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p>
            Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
            help the upcoming programmers with the code. Scanfcode focuses on
            providing the most efficient code or snippets as the code wants to
            be simple. We will help programmers build up concepts in different
            programming languages that include C, C++, Java, HTML, CSS,
            Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
          </p>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
