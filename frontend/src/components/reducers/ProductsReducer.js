import React, { useContext, useEffect, useReducer } from "react";
import productService from "../../services/products";

export const ProductsContext = React.createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "products":
      return action.payload;
    default:
      return state;
  }
};

const ProductsReducer = ( {children}) => {
  const [products, dispatchProducts] = useReducer(productReducer, null);


  useEffect(() => {
    productService.getAll().then((x) => dispatchProducts({ type: "products", payload: x }));
  }, []);

  console.log(products)

  return (
    <>
      <ProductsContext.Provider value={{ products: products, productsDispatch: dispatchProducts }}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsReducer;
