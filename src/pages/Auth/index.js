import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../UnAuth/Home';
import Signup from '../UnAuth/Signup';
import Profile from './Profile';

export default function AuthRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile/edit" render={() => <Signup isEdit={true} />} />
      <Route exact path="/profile" component={Profile} />
      <Redirect to="/" />
    </Switch>
  );
}
