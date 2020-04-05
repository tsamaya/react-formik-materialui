import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string('Enter a name').required('Name is required'),
  age: yup.number('Enter a number').required('Age is required'),
  ratio: yup.number('Enter a decimal').required('ratio is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('')
    .min(8, 'Password must contain at least 8 characters')
    .required('Enter your password'),
  confirmPassword: yup
    .string('Enter your password')
    .required('Confirm your password')
    .oneOf([yup.ref('password')], 'Password does not match'),
});
