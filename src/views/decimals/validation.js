import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const validationSchema = yup.object({
  name: yup.string('Enter a name').required('Name is required'),
  price: yup
    .number('Enter a price')
    .positive('Enter a positive price')
    .required('Price is required'),
  delta: yup
    .number('Enter a delta')
    .min(0, 'min value is 0')
    .max(1, 'max value is 1')
    .required('Price is required'),
});
