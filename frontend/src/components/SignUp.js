import React from "react";
import { Button, Card, CardContent, useMediaQuery,
  useTheme, } from "@material-ui/core";
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
    <Card className={isMatch ? classes.cardContent4 : classes.cardContent3}  variant="outlined">
    <CardContent className={classes.cardContent} >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className={classes.form} noValidate autoComplete="off">
            <MyTextInput
            style={{margin:"5%"}}
              id="nameInput"
              label="Name"
              name="name"
              type="text"
              placeholder="Jane"
            />

            <MyTextInput
            style={{margin:"5%"}}
              id="emailInput"
              label="Email"
              name="email"
              type="email"
              placeholder="jane@formik.com"
            />

            <MyTextInput
            style={{margin:"5%"}}
              id="passwordInput"
              label="password"
              name="password"
              type="password"
              placeholder="password"
            />

            <Button
             style={{margin:"5%"}}
            color="primary"
              variant="contained"
              type="submit"
            >
              Sign up
            </Button>
          </Form>
        </Formik>
        </CardContent>
      </Card>
  );
};

export default SignUp;
