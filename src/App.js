import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { CssBaseline, Grid } from '@material-ui/core';

import SimpleForm from 'views/SimpleForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <CssBaseline>
      <Grid container className={classes.root} spacing={2}>
        <Grid item>
          <SimpleForm />
        </Grid>
      </Grid>
    </CssBaseline>
  );
}
