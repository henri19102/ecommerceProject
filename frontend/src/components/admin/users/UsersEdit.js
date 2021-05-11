import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
} from "react-admin";

const UsersEdit = (props) => {


  return (
    <Edit title="Edit user" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
        <BooleanInput source="isAdmin" />
      </SimpleForm>
    </Edit>
  );
};

export default UsersEdit;
