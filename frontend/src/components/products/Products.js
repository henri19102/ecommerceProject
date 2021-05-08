import React, { useState } from "react";
import ProductView from "./ProductView";
import { useProducts } from "../reducers/ProductsReducer";
import Select from "react-select";
import TextField from "@material-ui/core/TextField";

const Products = () => {
  const [category, setCategory] = useState("All");
  const [name, setName] = useState("");

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

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "25px",
          padding: "2%",
          backgroundColor: "white",
        }}
      >
        <div style={{ width: "30%" }}>
          <label>
            Filter by product category:
            <Select
              options={options}
              onChange={handleChange}
              value={findValue}
            />
          </label>
        </div>
        <div style={{ width: "30%" }}>
          <label>
            Search:
            <TextField
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              label="Search product by name"
            />
          </label>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products
          .filter((z) => z.name.includes(name))
          .filter((y) =>
            category === "All" ? y : y.category === category
          )
          .map((x) => (
            <ProductView key={x.id} product={x} />
          ))}
      </div>
    </>
  );
};

export default Products;
