import React from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Typography } from '@material-ui/core';

import styles from 'assets/jss/forms';

import { FormWithDecimals } from 'components/FormWithDecimals';

import { initialValues } from './initialValues';
import { validationSchema } from './validation';
import { handleSubmit } from './handleSubmit';

const useStyles = makeStyles(styles);

const FormWithDecimalContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h4">Item Form</Typography>
          <Typography variant="subtitle1">
            allow decimals whatever the browser locale is
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => <FormWithDecimals {...props} />}
          </Formik>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default FormWithDecimalContainer;
