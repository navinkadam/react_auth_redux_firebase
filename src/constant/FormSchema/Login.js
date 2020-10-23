import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required.'),
  password: Yup.string().trim().required('No password provided.'),
});
