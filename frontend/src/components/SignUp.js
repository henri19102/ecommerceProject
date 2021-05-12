import React from "react";
import { Button, Box } from "@material-ui/core";
import userService from "../services/users";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./MyTextInput";
import { useStyles } from "../styles/styles";
import { useUsers } from "./reducers/UserReducer";
import { useNotification } from "./reducers/NotificationReducer";
import { useHistory } from "react-router-dom";

const SignUp = () => {

//#region 

  const user = useUsers();
  const history = useHistory();
  const classes = useStyles();
  const message = useNotification()

  
const notificationMessage = (msg, isError) => {
  message.dispatchNotification({ type: "message", message: {message: msg, isError: isError} })
  setTimeout(()=>{
      message.dispatchNotification({ type: "clear"})
  }, 5000)
}

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email addresss`").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    try {
      await userService.signUp(values);
      const loggedInUser = await userService.logIn({name: values.name, password: values.password});
      window.localStorage.setItem("loggedUser", JSON.stringify(loggedInUser));
      user.dispatchUser({ type: "logIn", payload: loggedInUser });
      history.push("/");
      notificationMessage('Succesfully signed up!', false)
    } catch (e) {
      console.error(e);
      notificationMessage('Invalid inputs!', true)
    }
  };
//#endregion

  return (
      <Box borderRadius={16} className={classes.logIn} boxShadow="10">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className={classes.form} noValidate autoComplete="off">
            <MyTextInput
            className={classes.input}
              id="nameInput"
              label="Name"
              name="name"
              type="text"
              placeholder="Jane"
            />

            <MyTextInput
            className={classes.input}
              id="emailInput"
              label="Email"
              name="email"
              type="email"
              placeholder="jane@formik.com"
            />

            <MyTextInput
            className={classes.input}
              id="passwordInput"
              label="password"
              name="password"
              type="password"
              placeholder="password"
            />

            <Button
            color="primary"
              variant="contained"
              type="submit"
            >
              Sign up
            </Button>
          </Form>
        </Formik>
      </Box>
  );
};

export default SignUp;
