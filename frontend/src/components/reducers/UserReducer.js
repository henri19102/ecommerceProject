/* eslint-disable indent */
import React, { useContext, useEffect, useReducer } from "react";

export const UserContext = React.createContext();

export const useUsers = () => {
  return useContext(UserContext);
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "logIn":
      return action.payload;
    case "logOut":
      return null;
    default:
      return state;
  }
};

const UserReducer = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, null);

  useEffect(() => {
    const userJSON = window.localStorage.getItem("loggedUser");
    if (userJSON) {
      const now = new Date();
      const userObject = JSON.parse(userJSON);
      if (userObject.expiry < now.getTime()) {
        window.localStorage.removeItem("loggedUser");
        dispatchUser({ type: "logOut" });
      }

      dispatchUser({ type: "logIn", payload: userObject });
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user: user, dispatchUser: dispatchUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserReducer;
