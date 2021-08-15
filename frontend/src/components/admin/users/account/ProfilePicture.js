import React from "react";
import { Box, Avatar } from "@material-ui/core";
import { useStyles } from "../../../../styles/styles";

const ProfilePicture = () => {
  const classes = useStyles();
  return (
    <Box className={classes.products}>
      <Avatar src='/broken-image.jpg' className={classes.large} />
      TÄHÄN DEFAULT IMAGE TAI KÄYTTJÄN KAUNIIT KASVOT
      <input type='file' accept='image/*' multiple={false} />
    </Box>
  );
};

export default ProfilePicture;
