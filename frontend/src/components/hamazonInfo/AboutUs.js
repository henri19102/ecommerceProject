import React from "react";
import {
  Box,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import { useStyles } from "../../styles/styles";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.container}>
          <h2>About Us</h2>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h3>Can you make it stand out more?</h3>
            <p>
              i think this should be fairly easy so if you just want to have a
              look, the website doesnt have the theme i was going for and we
              need more images of groups of people having non-specific types of
              fun. There is too much white space can you make the blue bluer? or
              will royalties in the company do instead of cash, what is a
              hamburger menu. In an ideal world im not sure, try something else,
              nor this was not according to brief, and thanks for taking the
              time to make the website, but i already made it in wix. Can you
              make the logo bigger yes bigger bigger still the logo is too big
              make it original, for theres all this spanish text on my site. Why
              is a 15mb gif on the startpage a bad idea?! can my website be in
              english? can it be more retro, so thanks for taking the time to
              make the website, but i already made it in wix jazz it up a
              little.
            </p>
            <h4>i think we need to start from scratch.</h4>
            <p>
              We are your relatives im not sure, try something else we try your
              eye, but can you change everything?. It&apos;s great, can you add
              a beard though jazz it up a little, yet can you lower the price
              for the website? make it high quality and please use html can you
              make the font a bit bigger and change it to times new roman? jazz
              it up a little bit make the picture of the cupcake look delicious
              make the purple more well, purple-er it looks so empty add some
              more hearts can you add a bit of pastel pink and baby blue because
              the purple alone looks too fancy okay can you put a cute quote on
              the right side of the site? oh no it looks messed up! Can you make
              it pop can you put &quot;find us on facebook&quot; by the facebook
              logo? Jazz it up a little. That&apos;s great, but we need to add
              this 2000 line essay. Can you make it stand out more?.
            </p>
            <h4>Can you lower the price for the website?</h4>
            <p>
              make it high quality and please use html can you make the font a
              bit bigger and change it to times new roman? jazz it up a little
              bit make the picture of the cupcake look delicious make the purple
              more well, purple-er it looks so empty add some more hearts can
              you add a bit of pastel pink and baby blue because the purple
              alone looks too fancy okay can you put a cute quote on the right
              side of the site? oh no it looks messed up! i think we need to
              start from scratch can the black be darker could you move it a tad
              to the left can you please change the color theme of the website
              to pink and purple? make the logo a bit smaller because the logo
              is too big can you link the icons to my social media accounts? oh
              and please put pictures of cats everywhere. Make it pop can you
              make it stand out more? we exceed the client&apos;s expectations.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem>
                <ListItemIcon>
                  <BusinessRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Tegridy Inc" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="TegridyRoad 160 SF CA" />
              </ListItem>
              <ListItem button component="a" href="mailto:havesome@tegridy.org">
                <ListItemIcon>
                  <EmailRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="havesome@tegridy.org" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="339-7474809" />
              </ListItem>
            </List>
          </Paper>
          <Divider />
          <Paper className={classes.paper}>
            <iframe
              height="600"
              src="https://maps.google.com/maps?q=Thinadhoo&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
