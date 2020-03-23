import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";

import * as yup from "yup";

import { Form } from "./Form";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`
  },
  container: {
    maxWidth: "200px"
  }
});

const validationSchema = yup.object({
  name: yup.string("Enter a name").required("Name is required"),
  age: yup.number("Enter a number").required("Age is required"),
  ratio: yup.number("Enter a decimal").required("ratio is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("")
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),
  confirmPassword: yup
    .string("Enter your password")
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Password does not match")
});

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;
    const values = {
      name: "",
      age: "",
      ratio: "",
      email: "",
      confirmPassword: "",
      password: ""
    };

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Form</h1>
            <Formik initialValues={values} validationSchema={validationSchema}>
              {props => <Form {...props} />}
            </Formik>
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SimpleForm);
