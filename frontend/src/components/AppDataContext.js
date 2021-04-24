import React, { useContext, useEffect, useState, useReducer } from "react";
import productService from "../services/products";

export const UserContext = React.createContext();
export const ProductsContext = React.createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const useUsers = () => {
  return useContext(UserContext);
};

const USER_ACTION = {
  LOG_IN: 'logIn',
  LOG_OUT: 'logOut'
}


const reducer = (state, action) => {
  switch (action.type) {
    case USER_ACTION.LOG_IN:
      return action.payload
    case USER_ACTION.LOG_OUT:
      return null
    default:
      return state
  }
}

const AppDataContext = ({ children }) => {
  const [loggedUser, dispatch] = useReducer(reducer, null)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const userJSON = window.localStorage.getItem("loggedUser");
    if (userJSON) {
      const userObject = JSON.parse(userJSON);
      dispatch({type: USER_ACTION.LOG_IN, payload: userObject})
    }
  }, []);

  useEffect(() => {
    productService.getAll().then((x) => setProducts(x));
  }, []);

  return (
    <>
      <UserContext.Provider value={{loggedUser: loggedUser, userDispatch: dispatch}}>
        <ProductsContext.Provider value={products}>
          {children}
        </ProductsContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default AppDataContext;
