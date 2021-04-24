import React from "react";
import Alert from "@material-ui/lab/Alert";
import { useNotification } from "./reducers/NotificationReducer";

const Notification = () => {
  const message = useNotification();

  if (message.notification.isError) {
    return (
      <>
        {message.notification.message && (
          <Alert variant="filled" severity="error">
            {message.notification.message}
          </Alert>
        )}
      </>
    );
  }

  return (
    <>
      {message.notification.message && (
        <Alert variant="filled" severity="success">
          {message.notification.message}
        </Alert>
      )}
    </>
  );
};

export default Notification;
