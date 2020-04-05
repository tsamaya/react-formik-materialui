import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { CssBaseline, Grid } from '@material-ui/core';

import styles from 'assets/jss/app';

import SimpleForm from 'views/_simpleforms/SimpleFormContainer';
import SimpleFormBridged from 'views/_simpleforms/SimpleFormBridgedContainer';
import BirthdayFormContainer from 'views/_datepicker/BirthdayFormContainer';

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
      </Grid>
    </CssBaseline>
  );
}
