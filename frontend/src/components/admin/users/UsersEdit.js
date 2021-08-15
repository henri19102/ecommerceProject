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
        <TextInput source="lastname" />
        <TextInput source="address" />
        <TextInput source="email" />
        <TextInput source="phonenumber" />
        <BooleanInput source="isAdmin" />
      </SimpleForm>
    </Edit>
  );
};

export default UsersEdit;
