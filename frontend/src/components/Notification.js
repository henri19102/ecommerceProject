import React from "react";
import Alert from "@material-ui/lab/Alert";
import { useNotification } from "./reducers/NotificationReducer";
import {useStyles} from '../styles/styles'
import Snackbar from '@material-ui/core/Snackbar';

const Notification = () => {
  const classes = useStyles();
  const message = useNotification();

  if (message.notification.isError) {
    return (
      <>
        {message.notification.message && (
           <Snackbar open={true} >
          <Alert className={classes.message} variant="filled" severity="error">
            {message.notification.message}
          </Alert>
          </Snackbar>
        )}
      </>
    );
  }

  return (
    <>
      {message.notification.message && (
        <Snackbar open={true} >
        <Alert variant="filled" severity="success">
          {message.notification.message}
        </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Notification;
