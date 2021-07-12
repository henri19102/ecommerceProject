import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

const ProductsEdit = (props) => {
  return (
    <Edit title="Edit product" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <NumberInput source="price" step={1} />
        <NumberInput source="count" step={1} />
        <TextInput source="category" />
      </SimpleForm>
    </Edit>
  );
};

export default ProductsEdit;
