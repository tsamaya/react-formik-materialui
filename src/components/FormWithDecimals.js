/* eslint-disable react/prop-types */
import React from 'react';
import { Button, InputAdornment, LinearProgress } from '@material-ui/core';
import { Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

// eslint-disable-next-line import/prefer-default-export
export const FormWithDecimals = (props) => {
  const { errors, isValid, isSubmitting, touched } = props;

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
        name="price"
        label="Price"
        type="number"
        step={0.01}
        fullWidth
        required
        InputProps={{
          endAdornment: <InputAdornment position="end">€</InputAdornment>,
        }}
      />

      <Field
        component={TextField}
        name="delta"
        label="Delta"
        type="number"
        step={0.01}
        fullWidth
        required
        helperText={touched.delta ? errors.delta : 'Value between 0 and 1'}
      />

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
