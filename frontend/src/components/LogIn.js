import React from "react";
import { Button, Card, CardContent,  useMediaQuery,
  useTheme, } from "@material-ui/core";

import userService from "../services/users";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./MyTextInput";
import { useUsers } from "./reducers/UserReducer";
import { useNotification } from "./reducers/NotificationReducer";
import { useHistory } from "react-router-dom";
import { useStyles } from "../styles/styles";

const Login = () => {
  const user = useUsers();
  const history = useHistory();
  const classes = useStyles();
  const message = useNotification()
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const notificationMessage = (msg, isError) => {
    message.dispatchNotification({ type: "message", message: {message: msg, isError: isError} })
    setTimeout(()=>{
        message.dispatchNotification({ type: "clear"})
    }, 5000)
  }

  const initialValues = {
    name: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    try {
      const loggedInUser = await userService.logIn(values);
      window.localStorage.setItem("loggedUser", JSON.stringify(loggedInUser));
      user.dispatchUser({ type: "logIn", payload: loggedInUser });
      history.push("/");
      notificationMessage(`Succesfully logged in as ${loggedInUser.name}!`, false)
    } catch (e) {
      console.error(e);
      notificationMessage('Wrong name or password!', true)
    }
  };

  return (
    <Card className={isMatch ? classes.cardContent4 : classes.cardContent3}  variant="outlined">
    <CardContent  >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className={classes.form}  noValidate autoComplete="off">
            <MyTextInput
              className={classes.input}
              id="nameInput"
              label="name"
              name="name"
              type="text"
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
            className={classes.input}
            color="primary"
              variant="contained"
              type="submit"
            >
              Log In
            </Button>
          </Form>
        </Formik>
        </CardContent>
      </Card>
  );
};

export default Login;
