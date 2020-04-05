import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { CssBaseline, Grid } from '@material-ui/core';

import styles from 'assets/jss/app';

import SimpleForm from 'views/SimpleForm';
import SimpleFormBridged from 'views/SimpleFormBridged';

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
      </Grid>
    </CssBaseline>
  );
}
