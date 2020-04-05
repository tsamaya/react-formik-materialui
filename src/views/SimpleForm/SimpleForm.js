import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Form } from 'formik';

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
        id="name"
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
        id="email"
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
        id="password"
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
        id="confirmPassword"
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
