import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const validationSchema = yup.object({
  name: yup.string('Enter a name').required('Name is required'),
  age: yup.string('Select you age').required('Age is required'),
});
