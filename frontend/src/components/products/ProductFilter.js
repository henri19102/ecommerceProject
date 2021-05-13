import React from 'react'
import Select from "react-select";
import {Typography} from "@material-ui/core";


const ProductFilter = ({options, handleChange, findValue, category}) => {
    return (
        <div style={{ width: "30%" }}>
        <Typography>
          Filter by product category:
          <Select
            options={options}
            onChange={handleChange}
            value={findValue}
          />
        </Typography>
      </div>
    )
}

export default ProductFilter
