import React from "react";
import Select from "react-select";
import { Typography } from "@material-ui/core";

// eslint-disable-next-line no-unused-vars
const ProductFilter = ({ options, handleChange, findValue, category }) => {
  return (
    <div style={{ width: "30%" }}>
      <Typography component={"div"}>
        Filter products:
        <Select options={options} onChange={handleChange} value={findValue} />
      </Typography>
    </div>
  );
};

export default ProductFilter;
