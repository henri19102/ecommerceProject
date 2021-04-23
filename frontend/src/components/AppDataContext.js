import React, { useContext, useEffect, useState } from "react";
import productService from "../services/products";

export const UserContext = React.createContext();
export const ProductsContext = React.createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const useUsers = () => {
  return useContext(UserContext);
};

const AppDataContext = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setLoggedInUser(user);
    }
  }, []);

  useEffect(() => {
    productService.getAll().then((x) => setProducts(x));
  }, []);

  return (
    <>
      <UserContext.Provider value={loggedInUser}>
        <ProductsContext.Provider value={products}>
          {children}
        </ProductsContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default AppDataContext;
