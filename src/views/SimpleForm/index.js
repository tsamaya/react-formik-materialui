import React from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import styles from 'assets/jss/forms';

import { SimpleForm } from './SimpleForm';
import initialValues from './initialValues';
import { validationSchema } from './validation';

const useStyles = makeStyles(styles);

const SimpleFormContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <h1>Form</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {(props) => <SimpleForm {...props} />}
          </Formik>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default SimpleFormContainer;
