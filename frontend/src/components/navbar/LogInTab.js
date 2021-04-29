import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { LockOpen, Lock } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useUsers } from "../reducers/UserReducer";

const LogInTab = () => {
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
      <IconButton onClick={handleChange}>
        {user.user ? (
          <Typography>
            <LockOpen fontSize="large" style={{ display: "flex" }} />
            logout
          </Typography>
        ) : (
          <Typography>
            <Lock fontSize="large" style={{ display: "flex" }} />
            login
          </Typography>
        )}
      </IconButton>
    </>
  );
};

export default LogInTab;
