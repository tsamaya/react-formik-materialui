/* eslint-disable react/prop-types */
import React from 'react';
import { Button, LinearProgress } from '@material-ui/core';
import { Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';

// eslint-disable-next-line import/prefer-default-export
export const BirthDayForm = (props) => {
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
        component={KeyboardDatePicker}
        name="birthday"
        // placeholder={new Date()}
        label="Birthday"
        format="DD/MM/YYYY"
        clearable={false} // side effect with timezone
        fullWidth
        InputAdornmentProps={{ position: 'start' }}
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
