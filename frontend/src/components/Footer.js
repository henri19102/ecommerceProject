import React from "react";
import {
  Box,
  Grid,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import HowToRegRoundedIcon from "@material-ui/icons/HowToRegRounded";
import { useStyles } from "../styles/styles";
import { useHistory } from "react-router-dom";


const Footer = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.footer}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={8}>
          <h4 className={classes.white}>About</h4>
          <p className={classes.white}>
            Make sure to include in your wheelhouse player-coach or nail it
            down, meeting assassin land the plane. Player-coach I have zero
            cycles for this we just need to put these last issues to bed start
            procrastinating 2 hours get to do work while procrastinating open
            book pretend to read while manager stands and watches silently
            nobody is looking quick do your web search manager caught you and
            you are fured. You better eat a reality sandwich before you walk
            back in that boardroom ramp up. We need a paradigm shift can you
            champion this but radical candor but this is our north star design.
          </p>
        </Grid>
        <Grid item xs={4}>
          <h4 className={classes.white}>Links</h4>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button component="a" href="mailto:havesome@tegridy.org">
              <ListItemIcon>
                <EmailRoundedIcon className={classes.white} />
              </ListItemIcon>
              <ListItemText className={classes.white} primary="Contact Us" />
            </ListItem>
            <ListItem button onClick={() => history.push("/about_us")}>
              <ListItemIcon>
                <InfoRoundedIcon className={classes.white} />
              </ListItemIcon>
              <ListItemText className={classes.white} primary="About us" />
            </ListItem>
            <ListItem button onClick={() => history.push("/registry")}>
              <ListItemIcon>
                <HowToRegRoundedIcon className={classes.white} />
              </ListItemIcon>
              <ListItemText
                className={classes.white}
                primary="Registry descriptions"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <p className={classes.white}>
        Copyright &copy; 2017 All Rights Reserved by Tegridy Inc.
      </p>
    </Box>
  );
};

export default Footer;
