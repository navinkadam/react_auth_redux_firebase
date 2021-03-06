import * as Yup from 'yup';

export default Yup.object().shape({
  fName: Yup.string().min(5, 'Too short.').max(50, 'Too Long.').required('Your name required.'),
  lName: Yup.string().min(2, 'Too short.').max(50, 'Too Long.').required('Your last name required.'),
  phoneNumber: Yup.number().min(10, 'Must be 10 digits phone number.').required('Your phone number required.'),
  email: Yup.string().email('Invalid email').required('Email is required.'),
  password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
    .required('You must re-type your password.'),
});
