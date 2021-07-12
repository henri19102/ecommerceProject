import React from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

const ProductsCreate = (props) => {
  return (
    <Create title="Add product" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <NumberInput source="price" step={1} />
        <NumberInput source="count" step={1} />
        <TextInput source="category" />
      </SimpleForm>
    </Create>
  );
};

export default ProductsCreate;
