import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { LockOpen, Lock } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useUsers } from "../reducers/UserReducer";
import {useStyles} from "../../styles/styles"

const LogInTab = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = useUsers();

  const handleChange = () => {
    if (user.user) {
      window.localStorage.removeItem("loggedUser");
      user.dispatchUser({ type: "logOut" });
    }
    history.push("/login");
  };

  return (
    <>
      <IconButton className={classes.white} onClick={handleChange}>
        {user.user ? (
          <Typography>
            <LockOpen fontSize="large" />
            logout
          </Typography>
        ) : (
          <Typography>
            <Lock fontSize="large" />
            login
          </Typography>
        )}
      </IconButton>
    </>
  );
};

export default LogInTab;
