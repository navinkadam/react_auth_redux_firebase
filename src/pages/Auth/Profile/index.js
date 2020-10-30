import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Heading from '../../../components/Heading';
import FileInput from '../../../components/FileInput';
import Button from '../../../components/Button';
import CustomLink from '../../../components/CustomLink';
import Detail from '../../../components/Detail';
import * as actions from '../../../store/actions';

import './profile.css';

export default function Profile() {
  const user = useSelector(({ user }) => (user && user.profile) || {});
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(actions.logout(dispatch));
  };
  return (
    <div className="profile-wrapper">
      <Heading>Profile</Heading>
      <div className="user-content">
        <FileInput className="profile-img" profileURL={user.profileURL} />
        <div className="detail-container">
          <Detail label="First Name" value={user.fName || ''} />
          <Detail label="Last Name" value={user.lName || ''} />
          <Detail label="E-mail" value={user.email || ''} />
          <Detail label="Phone Number" value={user.phoneNumber || ''} />
        </div>
      </div>
      <div>
        <Button>
          <CustomLink to="/profile/edit">Edit Profile</CustomLink>
        </Button>
        <Button onClick={onLogout}>Logout</Button>
      </div>
    </div>
  );
}
