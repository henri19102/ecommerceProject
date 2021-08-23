import React from "react";
import { Button, Card, CardContent } from "@material-ui/core";

import userService from "../../../../services/users";

import { Formik, Form } from "formik";
import MyTextInput from "../../../MyTextInput";
import { useUsers } from "../../../reducers/UserReducer";
import { useStyles } from "../../../../styles/styles";

const MyAccountEdit = ({ changeEdit }) => {
  const user = useUsers();
  const classes = useStyles();
  console.log(user.user);

  const initialValues = {
    name: user.user.name,
    lastname: user.user.lastname,
    address: user.user.address,
    phonenumber: user.user.phonenumber,
    email: user.user.email
  };

  const onSubmit = async (values) => {
    try {
      await userService.editUser(user.user.id, values);
      const editedUser = {
        accessToken: user.user.accessToken,
        id: user.user.id,
        expiry: user.user.expiry,
        isAdmin: user.user.isAdmin,
        ...values
      };
      console.log(editedUser);
      user.dispatchUser({ type: "logIn", payload: editedUser });
      changeEdit();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card variant='outlined'>
      <CardContent>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className={classes.form} noValidate autoComplete='off'>
            <MyTextInput
              style={{ margin: "5%" }}
              id='nameInput'
              label='name'
              name='name'
              type='text'
            />
            <MyTextInput
              style={{ margin: "5%" }}
              id='lastNameInput'
              label='lastname'
              name='lastname'
              type='text'
            />
            <MyTextInput
              style={{ margin: "5%" }}
              id='address'
              label='address'
              name='address'
              type='text'
            />
            <MyTextInput
              style={{ margin: "5%" }}
              id='phonenumber'
              label='phonenumber'
              name='phonenumber'
              type='number'
            />
            <MyTextInput
              style={{ margin: "5%" }}
              id='email'
              label='email'
              name='email'
              type='email'
            />

            <Button
              style={{ margin: "5%" }}
              id='loginbtn'
              color='primary'
              variant='contained'
              type='submit'
            >
              Save Edits
            </Button>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
};

export default MyAccountEdit;
