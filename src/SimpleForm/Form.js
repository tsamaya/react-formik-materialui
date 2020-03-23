import React from 'react';
import { Button, TextField } from '@material-ui/core';

export const Form = props => {
  const {
    values: { name, age, ratio, email, password, confirmPassword },
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        value={name}
        fullWidth
        required
        helperText={touched.name ? errors.name : 'Your name'}
        error={touched.name && Boolean(errors.name)}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        id="age"
        type="number"
        step="1"
        name="age"
        label="Age"
        fullWidth
        required
        helperText={touched.age ? errors.age : 'Your age'}
        error={touched.age && Boolean(errors.age)}
        value={age}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        id="ratio"
        type="number"
        step="0.1"
        name="ratio"
        label="Ratio"
        fullWidth
        required
        helperText={touched.ratio ? errors.ratio : 'A decimal value'}
        error={touched.ratio && Boolean(errors.ratio)}
        value={ratio}
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
        helperText={touched.email ? errors.email : 'Your email'}
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
        helperText={touched.password ? errors.password : 'your password'}
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
        helperText={
          touched.confirmPassword ? errors.confirmPassword : 'your passord'
        }
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
    </form>
  );
};
