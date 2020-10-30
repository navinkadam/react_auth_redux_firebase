import React, { useMemo, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import Heading from '../../../components/Heading';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { SignupSchema, ProfileUpdate } from '../../../constant/FormSchema';
import FileInput from '../../../components/FileInput';

import * as actions from '../../../store/actions';

import './signup.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Signup({ isEdit }) {
  const dispatch = useDispatch();
  const [initialValue, setInitialValue] = useState({
    fName: '',
    lName: '',
    phoneNumber: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    profileURL: null,
  });

  const [profileImg, setProfileImg] = useState(null);

  const user = useSelector(state => state.user);
  const history = useHistory();

  useEffect(() => {
    if (user.redirect) {
      history.push('/');
      dispatch(actions.setUserData({ redirect: false }));
    }
    return;
  }, [user.redirect, history, dispatch]);

  useEffect(() => {
    if (user.profile && user.profile.id) {
      setInitialValue({ ...user.profile });
    }
  }, [user.profile]);

  const onFileUpload = fileRef => {
    isEdit ? dispatch(actions.uploadUserProfileImg({ fileData: fileRef, profile: user.profile }, dispatch)) : setProfileImg(fileRef);
  };

  return (
    <div className="signUp-wrapper">
      <Heading>{isEdit ? 'Update Profile' : 'Create an Account'}</Heading>
      <Formik
        enableReinitialize={true}
        initialValues={initialValue}
        validationSchema={useMemo(() => (isEdit ? ProfileUpdate : SignupSchema), [isEdit])}
        onSubmit={data => {
          isEdit ? dispatch(actions.updateProfile(data, dispatch)) : dispatch(actions.signUp({ ...data, fileData: profileImg }, dispatch));
        }}
      >
        {({ isValid }) => (
          <Form>
            <FileInput onChange={onFileUpload} profileURL={initialValue.profileURL} />
            <div className="field-wrapper">
              <Field name="fName" label="First Name" type="text" component={Input} />
              <Field name="lName" label="Last Name" type="text" component={Input} />
            </div>
            <Field name="email" label="Email" type="email" component={Input} disabled={!!isEdit} />
            <Field name="phoneNumber" label="Phone Number" type="number" component={Input} />

            {!isEdit && (
              <div className="field-wrapper">
                <Field name="password" label="Password" type="password" component={Input} />
                <Field name="passwordConfirmation" label="Confirm Password" type="password" component={Input} />
              </div>
            )}

            <Button type="submit" disabled={!isValid}>
              {isEdit ? 'Update Profile' : 'Sign Up'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
