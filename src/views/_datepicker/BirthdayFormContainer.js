import React from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Typography } from '@material-ui/core';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import moment from 'moment';
import 'moment/locale/fr';

import styles from 'assets/jss/forms';

import { BirthDayForm } from 'components/BirthDayForm';

import { initialValues } from './initialValues';
import { validationSchema } from './validation';
import { handleSubmit } from './handleSubmit';

moment.locale('fr');

const useStyles = makeStyles(styles);

const BirthdayFormContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h4">Date Picker</Typography>
          <Typography variant="subtitle1">
            with formik-material-ui-pickers
          </Typography>
          <Typography variant="subtitle2">
            using moment and{' '}
            <span role="img" aria-label="fr">
              🇫🇷
            </span>
            locale
          </Typography>
          <MuiPickersUtilsProvider utils={MomentUtils} locale="fr">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(props) => <BirthDayForm {...props} />}
            </Formik>
          </MuiPickersUtilsProvider>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default BirthdayFormContainer;
