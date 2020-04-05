import React from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Typography } from '@material-ui/core';

import styles from 'assets/jss/forms';

import { SimpleFormBridged } from './SimpleFormBridged';
import { initialValues } from './initialValues';
import { validationSchema } from './validation';

const useStyles = makeStyles(styles);

const SimpleFormContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <Typography>Form</Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => <SimpleFormBridged {...props} />}
          </Formik>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default SimpleFormContainer;
