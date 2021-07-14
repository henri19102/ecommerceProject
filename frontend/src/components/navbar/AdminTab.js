import React from "react";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { IconButton, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../styles/styles";

const AdminTab = ({ pathTo }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <IconButton className={classes.blue} aria-label='admin'>
        <Typography className={classes.white}>
          <SupervisorAccountIcon
            className={classes.white}
            fontSize='large'
            onClick={() => history.push(pathTo)}
          />
          Admin
        </Typography>
      </IconButton>
    </>
  );
};

export default AdminTab;
