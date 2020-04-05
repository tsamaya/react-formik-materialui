import React from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Typography } from '@material-ui/core';

import styles from 'assets/jss/forms';

import { SimpleForm } from 'components/SimpleForm';

import { initialValues } from './initialValues';
import { validationSchema } from './validation';
import { handleSubmit } from './handleSubmit';

const useStyles = makeStyles(styles);

const SimpleFormBridgedContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h4">Form</Typography>
          <Typography variant="subtitle1">with plain Material-UI</Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => <SimpleForm {...props} />}
          </Formik>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default SimpleFormBridgedContainer;
