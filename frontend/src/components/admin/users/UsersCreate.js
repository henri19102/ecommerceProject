import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  PasswordInput
} from "react-admin";

const UsersCreate = (props) => {
  return (
    <Create title='Add user' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='lastname' />
        <TextInput source='address' />
        <TextInput source='email' />
        <TextInput source='phonenumber' />
        <PasswordInput source='password' />
        <BooleanInput source='isAdmin' />
      </SimpleForm>
    </Create>
  );
};

export default UsersCreate;
