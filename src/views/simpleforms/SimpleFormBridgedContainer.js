import React from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Typography } from '@material-ui/core';

import styles from 'assets/jss/forms';

import { SimpleFormBridged } from 'components/SimpleFormBridged';

import { initialValues } from './initialValues';
import { validationSchema } from './validation';
import { handleSubmit } from './handleSubmit';

const useStyles = makeStyles(styles);

const SimpleFormContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h4">Form</Typography>
          <Typography variant="subtitle1">with formik-material-ui</Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => <SimpleFormBridged {...props} />}
          </Formik>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default SimpleFormContainer;
