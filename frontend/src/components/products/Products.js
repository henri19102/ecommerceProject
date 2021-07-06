import React, { useState } from "react";
import ProductView from "./ProductView";
import { useProducts } from "../reducers/ProductsReducer";
import {useStyles} from "../../styles/styles"
import ProductFilter from './ProductFilter'
import ProductSearch from './ProductSearch'

const Products = () => {

  // OK

//#region
  const [category, setCategory] = useState("All");
  const [name, setName] = useState("");
  const classes = useStyles();
  const { products } = useProducts();

  if (!products) return null;

  const categoryArray = products.map(
    (x) => (x = { value: x.category, label: x.category })
  );
  const newArray = [...categoryArray, { value: "All", label: "All" }];
  const uniqueArray = (a) =>
    [...new Set(a.map((o) => JSON.stringify(o)))].map((s) => JSON.parse(s));

  const options = uniqueArray(newArray);

  const handleChange = (e) => {
    setCategory(e.value);
  };

  const findValue = () => {
    return options.find((obj) => obj.value === category);
  };
//#endregion
  
return (
    <>
    <div className={classes.productsPage} >
      <div className={classes.products} >
        <ProductFilter options={options} handleChange={handleChange} findValue={findValue} category={category}  />
       <ProductSearch setName={setName} />
      </div>
      <div className={classes.products} >
        {products
          .filter((z) => z.name.toLowerCase().includes(name.toLowerCase()))
          .filter((y) =>
            category === "All" ? y : y.category === category
          )
          .map((x) => (
            <ProductView key={x.id} product={x} />
          ))}
      </div>
      </div>
    </>
  );
};

export default Products;
