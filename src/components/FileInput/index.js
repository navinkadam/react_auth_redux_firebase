import React, { useEffect, useState } from 'react';
import { storage } from '../../config/firebase';

import './fileInput.css';
const initImg = 'https://start-cons.com/wp-content/uploads/2019/03/person-dummy-e1553259379744.jpg';
export default ({ profileURL, onChange, className = '' }) => {
  const [defaultAvatar, setDefaultAvatar] = useState(initImg);
  const onFileChange = file => {
    let reader = new FileReader();
    const fileRef = file.target.files[0];
    reader.onloadend = e => {
      console.log(onChange);
      setDefaultAvatar(reader.result);
      onChange && onChange(fileRef);
    };
    reader.readAsDataURL(fileRef);
  };

  useEffect(() => {
    const getImage = async () => {
      if (profileURL) {
        try {
          const imgURL = await storage.ref(`${profileURL}`).getDownloadURL();
          setDefaultAvatar(imgURL);
        } catch (error) {}
      }
    };
    getImage();
  }, [profileURL]);

  return (
    <div className={`profile-upload ${className}`}>
      <img src={defaultAvatar || initImg} alt="User " className="img-container" />
      <label>{onChange && <input type="file" className="file-input" onChange={onFileChange} alt="user" />}</label>
    </div>
  );
};
