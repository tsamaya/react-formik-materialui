/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  InputLabel,
  NativeSelect,
} from '@material-ui/core';
import { Form, Field } from 'formik';

import { TextField } from 'formik-material-ui';

// eslint-disable-next-line import/prefer-default-export
export const SelectNativeForm = (props) => {
  const {
    isValid,
    isSubmitting,
    touched,
    errors,
    handleChange,
    values,
  } = props;

  return (
    <Form noValidate>
      <Field
        component={TextField}
        name="name"
        label="Name"
        fullWidth
        required
      />

      <FormControl
        error={touched.age && Boolean(errors.age)}
        required
        fullWidth
      >
        <InputLabel htmlFor="age-native">Age</InputLabel>
        <NativeSelect
          name="age"
          inputProps={{
            id: 'age-native',
          }}
          onChange={handleChange}
          value={values.age}
        >
          <option value={''}>None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        {errors.age && <FormHelperText>{errors.age}</FormHelperText>}
      </FormControl>

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
