import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Box, Avatar } from "@material-ui/core";
import { useStyles } from "../../../../styles/styles";
import firebase from "firebase/app";
import "firebase/storage";

let app = null;
if (!firebase.apps.length) {
  app = firebase.initializeApp({
    apiKey: "AIzaSyCChEXLLB12_Ua3S--clt5JcWdhzgQPiug",
    authDomain: "ecommerce-react-edb89.firebaseapp.com",
    projectId: "ecommerce-react-edb89",
    storageBucket: "ecommerce-react-edb89.appspot.com",
    messagingSenderId: "776416473017",
    appId: "1:776416473017:web:5bf6ea37be7c9b2c031068",
    measurementId: "G-Q47B1D0PFC"
  });
} else {
  app = firebase.app(); // if already initialized, use that one
}

//Create References
var storageRef = app.storage().ref();
// Create a child reference
var imagesRef = storageRef.child("images/users");
// imagesRef now points to 'images'

const ProfilePicture = () => {
  const classes = useStyles();
  const [file, setFile] = useState("");

  const handlePhotoChange = (e) => {
    if (e.target.value !== "") {
      //TODO Tähän voisi tehdä paremman tarkistuksen?
      setFile(e.target.value);
    }
  };

  const uploadImages = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.onload = function (e) {
      setFile({ uploadedImage: e.target.result });
    };
    console.log(e);
    reader.readAsDataURL(e.target.files[0]);
    // 'file' comes from the Blob or File API
    imagesRef.put(file).then((snapshot) => {
      console.log("Uploaded a blob or file!" + e + snapshot);
    });
  };

  return (
    <Box className={classes.products}>
      <Avatar src='/broken-image.jpg' className={classes.large} />
      <form onSubmit={uploadImages} encType='multipart/form-data'>
        <Box>
          <label htmlFor='file'>
            {file.length > 0
              ? `Chosen image: ${file}`
              : "Choose file to upload"}
          </label>
          <input
            type='file'
            accept='image/*'
            multiple={false}
            value={file}
            onChange={handlePhotoChange}
          />
        </Box>
        <Box>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            style={{ margin: "5%" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ProfilePicture;
