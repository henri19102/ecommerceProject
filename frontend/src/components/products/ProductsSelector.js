import React, {useState} from 'react';
import Select from 'react-select';
import { useProducts } from "../reducers/ProductsReducer";


const ProductsSelector = () => {
const [item, setItem] = useState({})
const {products} = useProducts()

if (!products) return null;

const categoryArray = products.map(x=> x = {value: x.category, label: x.category})

const uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s))

const options = uniqueArray(categoryArray)

     const handleChange = (selectedOption) => {
         setItem({selectedOption})
      };


    return (
        <div style={{flexGrow: '5', padding: '5'}} >
             <Select style={{padding: '5%'}}
       
        options={options}
      />
        </div>
    )
}

export default ProductsSelector
