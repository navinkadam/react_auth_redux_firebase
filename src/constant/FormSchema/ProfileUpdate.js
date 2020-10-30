import * as Yup from 'yup';

export default Yup.object().shape({
  fName: Yup.string().min(5, 'Too short.').max(50, 'Too Long.').required('Your name required.'),
  lName: Yup.string().min(2, 'Too short.').max(50, 'Too Long.').required('Your last name required.'),
  phoneNumber: Yup.number().min(10, 'Must be 10 digits phone number.').required('Your phone number required.'),
  email: Yup.string().email('Invalid email').required('Email is required.'),
});
