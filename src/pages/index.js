import React from 'react';
import './pages.css';
import Auth from './Auth';
import UnAuth from './UnAuth';
import { Switch } from 'react-router-dom';

export default function Pages({ isAuth }) {
  return (
    <main className="pages-wrapper">
      <Switch>{isAuth ? <Auth /> : <UnAuth />}</Switch>
    </main>
  );
}
