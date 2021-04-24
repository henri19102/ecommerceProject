import React, { useContext, useReducer } from "react";

export const NotificationContext = React.createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

const messageType = {
  message: null,
  isError: true
}

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'message':
      return action.message
    case 'clear':
      return messageType
    default:
      return state
  }
}

const NotificationReducer = ( {children}) => {
  const [notification, dispatchNotification] = useReducer(notificationReducer, messageType);

    return (
        <>
        <NotificationContext.Provider value={{notification: notification, notificationDispatch: dispatchNotification}} >
        {children}
        </NotificationContext.Provider>
        </>
    )
}

export default NotificationReducer
