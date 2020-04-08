import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { CssBaseline, Grid } from '@material-ui/core';

import styles from 'assets/jss/app';

import SimpleForm from 'views/simpleforms/SimpleFormContainer';
import SimpleFormBridged from 'views/simpleforms/SimpleFormBridgedContainer';
import BirthdayFormContainer from 'views/datepicker/BirthdayFormContainer';
import FormWithDecimalContainer from 'views/decimals/FormWithDecimalContainer';

const useStyles = makeStyles(styles);

export default function App() {
  const classes = useStyles();
  return (
    <CssBaseline>
      <Grid container className={classes.root} spacing={2}>
        <Grid item>
          <SimpleForm />
        </Grid>
        <Grid item>
          <SimpleFormBridged />
        </Grid>
        <Grid item>
          <BirthdayFormContainer />
        </Grid>
        <Grid item>
          <FormWithDecimalContainer />
        </Grid>
      </Grid>
    </CssBaseline>
  );
}
