import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  BooleanField
} from "react-admin";

const UsersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='email' />
        <BooleanField source='isAdmin' />
        <DateField source='createdAt' />
        <DateField source='updatedAt' />
        <EditButton basePath='' />
        <DeleteButton basePath='' />
      </Datagrid>
    </List>
  );
};

export default UsersList;
