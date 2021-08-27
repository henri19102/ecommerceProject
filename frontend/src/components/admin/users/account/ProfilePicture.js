import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Box, Avatar } from "@material-ui/core";
import { useStyles } from "../../../../styles/styles";
import { storage } from "./firebase";

const ProfilePicture = ({ user }) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [imageUrl, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const getProfilePic = () => {
    storage
      .ref(`images/users/${user.id}`)
      .getDownloadURL()
      .then((url) => setUrl(url));
  };

  getProfilePic();

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const uploadImage = () => {
    //Create References
    const uploadTask = storage.ref(`images/users/${user.id}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
        setTimeout(() => {
          setProgress(0);
        }, 2000);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref(`images/users/${user.id}`)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
    console.log(progress);
  };

  return (
    <Box className={classes.products}>
      <Avatar src={imageUrl} className={classes.large} />
      <Box>
        <label htmlFor='file'>Choose file to upload </label>
        <input
          type='file'
          accept='image/*'
          multiple={false}
          onChange={handlePhotoChange}
        />
        {progress > 0 && <progress value={progress} max='100' />}
      </Box>
      <Box>
        <Button
          onClick={uploadImage}
          type='submit'
          variant='contained'
          color='primary'
          style={{ margin: "5%" }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePicture;
