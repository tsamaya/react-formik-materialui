/* eslint-disable react/prop-types */
import React from 'react';
import { Button, LinearProgress } from '@material-ui/core';
import { Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

// eslint-disable-next-line import/prefer-default-export
export const SimpleFormBridged = (props) => {
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
        name="email"
        label="Email"
        fullWidth
        required
      />
      <Field
        component={TextField}
        type="password"
        name="password"
        label="Password"
        fullWidth
        required
      />
      <Field
        component={TextField}
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        fullWidth
        required
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
