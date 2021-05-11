import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  AutocompleteInput,
} from "react-admin";

const ProductsEdit = (props) => {
  const category = [
    { id: "vaatteet", name: "vaatteet" },
    { id: "urheilu", name: "urheilu" },
    { id: "elintarvike", name: "elintarvike" },
  ];

  return (
    <Edit title="Edit product" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <NumberInput source="price" step={1} />
        <NumberInput source="count" step={1} />
        <AutocompleteInput source="category" choices={category} />
      </SimpleForm>
    </Edit>
  );
};

export default ProductsEdit;
