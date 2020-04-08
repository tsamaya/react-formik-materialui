/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { Form, Field } from 'formik';

import { TextField } from 'formik-material-ui';

// eslint-disable-next-line import/prefer-default-export
export const SelectForm = (props) => {
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
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
          name="age"
          inputProps={{
            id: 'age-select',
          }}
          onChange={handleChange}
          value={values.age}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
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
