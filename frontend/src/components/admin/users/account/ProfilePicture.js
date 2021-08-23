import React from "react";
import { Box, Avatar } from "@material-ui/core";
import { useStyles } from "../../../../styles/styles";
import firebase from "firebase";

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "gs://ecommerce-react-edb89.appspot.com"
};
firebase.initializeApp(firebaseConfig);
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();
console.log(storage);

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
