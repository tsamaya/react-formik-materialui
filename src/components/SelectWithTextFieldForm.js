/* eslint-disable react/prop-types */
import React from 'react';
import { Button, LinearProgress, MenuItem } from '@material-ui/core';
import { Form, Field } from 'formik';

import { TextField } from 'formik-material-ui';

// eslint-disable-next-line import/prefer-default-export
export const SelectForm = (props) => {
  const { isValid, isSubmitting } = props;

  return (
    <Form noValidate>
      <Field
        component={TextField}
        name="name"
        label="Name"
        fullWidth
        required
      />

      <Field
        component={TextField}
        name="age"
        label="Age"
        fullWidth
        required
        select
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Field>

      {isSubmitting && <LinearProgress />}

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValid || isSubmitting}
      >
        Submit
      </Button>
    </Form>
  );
};
