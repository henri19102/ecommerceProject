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
import DraftsIcon from "@material-ui/icons/Drafts";
import { useStyles } from "../styles/styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box m={1} className={classes.footer}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={8}>
          <h4>About</h4>
          <p>
            Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
            help the upcoming programmers with the code. Scanfcode focuses on
            providing the most efficient code or snippets as the code wants to
            be simple. We will help programmers build up concepts in different
            programming languages that include C, C++, Java, HTML, CSS,
            Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
          </p>
        </Grid>
        <Grid item xs={4}>
          <h4>Linkit</h4>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Ota yhteyttä" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Meistä" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Re­kis­te­ri­se­los­teet" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <p>Copyright &copy; 2017 All Rights Reserved by Tegridy Inc.</p>
    </Box>
  );
};

export default Footer;
