import React from 'react';

import NavbarItem from '../NavbarItem';
import Logo from '../../Logo/';
import { allRoutes } from '../../../constant/route';
import './navbar.css';

export default function Navbar({ isAuth }) {
  return (
    <header>
      <div className="nav-wrapper">
        <div className="nav-left">
          <Logo />
        </div>
        <div className="nav-right">
          <ul className="nav-ul">
            {allRoutes.map((route, index) => (!isAuth === !route.isProtected ? <NavbarItem key={`route-${index}`} {...route} /> : null))}
          </ul>
        </div>
      </div>
    </header>
  );
}
