import React, { Component } from 'react';
import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';

import { Form } from './Form';
import { validationSchema } from './validation';

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(
      2
    )}px`,
  },
  container: {
    maxWidth: '200px',
  },
});

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;
    const values = {
      name: '',
      age: '',
      ratio: '',
      email: '',
      confirmPassword: '',
      password: '',
    };

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Form</h1>
            <Formik initialValues={values} validationSchema={validationSchema}>
              {(props) => <Form {...props} />}
            </Formik>
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SimpleForm);
