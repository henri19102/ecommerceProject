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
      const userObject = JSON.parse(userJSON);
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
