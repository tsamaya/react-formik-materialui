/* eslint-disable react/prop-types */
import React from 'react';
import { Button, LinearProgress } from '@material-ui/core';
import { Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';

// eslint-disable-next-line import/prefer-default-export
export const BirthDayForm = (props) => {
  const { errors, touched, isValid, isSubmitting } = props;

  return (
    <Form noValidate>
      <Field
        component={TextField}
        name="name"
        label="Name"
        fullWidth
        required
        helperText={touched.name ? errors.name : ''}
        error={touched.name && Boolean(errors.name)}
      />
      <Field
        component={KeyboardDatePicker}
        name="birthday"
        // placeholder={new Date()}
        label="Birthday"
        format="DD/MM/YYYY"
        clearable
        fullWidth
        InputAdornmentProps={{ position: 'start' }}
        // helperText={touched.birthday ? errors.birthday : 'here'}
        // error={touched.birthday && Boolean(errors.birthday)}
      />
      <ErrorMessage name="birthday" />
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
