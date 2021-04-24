import React from "react";
import { Button, Box } from "@material-ui/core";
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

  const notificationMessage = (msg, isError) => {
    message.notificationDispatch({ type: "message", message: {message: msg, isError: isError} })
    setTimeout(()=>{
        message.notificationDispatch({ type: "clear"})
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
      user.userDispatch({ type: "logIn", payload: loggedInUser });
      history.push("/");
      notificationMessage(`Succesfully logged in as ${loggedInUser.name}!`, false)
    } catch (e) {
      console.error(e);
      notificationMessage('Wrong name or password!', true)
    }
  };

  return (
    <div className="pageStyle">
      <Box borderRadius={16} className="box" boxShadow="10">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className={classes.root} noValidate autoComplete="off">
            <MyTextInput
              id="nameInput"
              label="name"
              name="name"
              type="text"
              placeholder="jane@formik.com"
            />
            <MyTextInput
              id="passwordInput"
              label="password"
              name="password"
              type="password"
              placeholder="password"
            />

            <Button
              style={{ backgroundColor: "green" }}
              variant="contained"
              type="submit"
            >
              Log In
            </Button>
          </Form>
        </Formik>
      </Box>
    </div>
  );
};

export default Login;
