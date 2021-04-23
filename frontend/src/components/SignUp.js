import React from "react";
import { makeStyles, Button, Box } from "@material-ui/core";
import signUpUser from "../services/users";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./MyTextInput";

const SignUp = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(2),
        width: "25ch",
        marginBottom: "10%",
      },
    },
  }));

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

  const onSubmit = (values) => {
    signUpUser.signUp(values);
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
