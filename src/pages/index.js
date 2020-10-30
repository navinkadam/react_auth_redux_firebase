import React from 'react';
import './pages.css';
import Auth from './Auth';
import UnAuth from './UnAuth';

export default function Pages({ isAuth }) {
  return <main className="pages-wrapper">{isAuth ? <Auth /> : <UnAuth />}</main>;
}
