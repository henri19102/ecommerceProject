import React, { useContext, useEffect, useState } from "react";
import productService from "../../services/products";

export const ProductsContext = React.createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

const ProductsReducer = ( {children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((x) => setProducts(x));
  }, []);

  return (
    <>
      <ProductsContext.Provider value={products}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsReducer;
