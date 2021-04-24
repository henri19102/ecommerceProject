import React from "react";
import { Button, Box } from "@material-ui/core";
import userService from "../services/users";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./MyTextInput";
import { useStyles } from "../styles/styles";
import { useUsers } from "./AppDataContext";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const user = useUsers();
  const history = useHistory();
  const classes = useStyles();

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
      user.userDispatch({ type: "logIn", payload: loggedInUser });
      history.push("/");
    } catch (e) {
      console.error(e);
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
              label="Name"
              name="name"
              type="text"
              placeholder="Jane"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="jane@formik.com"
            />

            <MyTextInput
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
              Sign up
            </Button>
          </Form>
        </Formik>
      </Box>
    </div>
  );
};

export default SignUp;
