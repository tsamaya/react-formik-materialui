import React from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Typography } from '@material-ui/core';

import styles from 'assets/jss/forms';

import { SimpleForm } from './SimpleForm';
import { initialValues } from './initialValues';
import { validationSchema } from './validation';

const useStyles = makeStyles(styles);

const SimpleFormBridgedContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <Typography>Form</Typography>
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

export default SimpleFormBridgedContainer;
