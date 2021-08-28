import React, { useState, useEffect } from "react";
import ProductView from "./ProductView";
import { useProducts } from "../reducers/ProductsReducer";
import { useStyles } from "../../styles/styles";
import ProductFilter from "./ProductFilter";
import ProductSearch from "./ProductSearch";
import { useHistory } from "react-router-dom";

const Products = () => {
  const [category, setCategory] = useState("All");
  const [name, setName] = useState("");
  const classes = useStyles();
  const { products } = useProducts();
  const history = useHistory();


  if (!products) return null;

  useEffect(() => {
    //Check if got to products page by redirection and add gategory
    // Tähän sais kai history replacella jotenki että toimii myös products sivulla uudelleen klikkaaminen
    if (history.location.state) {
      history.location.state.category &&
        setCategory(history.location.state.category);
    }
  }, []);

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

  return (
    <>
      <div className={classes.productsPage}>
        <div className={classes.products}>
          <ProductFilter
            options={options}
            handleChange={handleChange}
            findValue={findValue}
            category={category}
          />
          <ProductSearch setName={setName} />
        </div>
        <div className={classes.products}>
          {products
            .filter((z) => z.name.toLowerCase().includes(name.toLowerCase()))
            .filter((y) => (category === "All" ? y : y.category === category))
            .map((x) => (
              <ProductView key={x.id} product={x} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
