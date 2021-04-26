import React, { useContext, useEffect, useReducer } from "react";

export const UserContext = React.createContext();

export const useUsers = () => {
  return useContext(UserContext);
};

const USER_ACTION = {
  LOG_IN: "logIn",
  LOG_OUT: "logOut",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTION.LOG_IN:
      return action.payload;
    case USER_ACTION.LOG_OUT:
      return null;
    default:
      return state;
  }
};

const UserReducer = ({ children }) => {
  const [loggedUser, dispatchUser] = useReducer(userReducer, null);

  useEffect(() => {
    const userJSON = window.localStorage.getItem("loggedUser");
    if (userJSON) {
      const userObject = JSON.parse(userJSON);
      dispatchUser({ type: USER_ACTION.LOG_IN, payload: userObject });
    }
  }, []);

  console.log(loggedUser)

  return (
    <>
      <UserContext.Provider value={{ loggedUser: loggedUser, userDispatch: dispatchUser }} >
      { children }
      </UserContext.Provider>
    </>
  );
};

export default UserReducer;
