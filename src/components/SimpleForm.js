/* eslint-disable react/prop-types */
import React from 'react';
import { Button, TextField, LinearProgress } from '@material-ui/core';
import { Form } from 'formik';

// eslint-disable-next-line import/prefer-default-export
export const SimpleForm = (props) => {
  const {
    values: { name, email, password, confirmPassword },
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    isSubmitting,
  } = props;

  return (
    <Form noValidate>
      <TextField
        name="name"
        label="Name"
        value={name}
        fullWidth
        required
        helperText={touched.name ? errors.name : ''}
        error={touched.name && Boolean(errors.name)}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        type="email"
        name="email"
        label="Email"
        value={email}
        fullWidth
        required
        helperText={touched.email ? errors.email : ''}
        error={touched.email && Boolean(errors.email)}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        fullWidth
        required
        helperText={touched.password ? errors.password : ''}
        error={touched.password && Boolean(errors.password)}
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        fullWidth
        required
        helperText={touched.confirmPassword ? errors.confirmPassword : ''}
        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        value={confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
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
