import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from "./SignUp";
import TopNavbar from '../component/TopNavbar'

export default function RouterApp() {
  return (
    <div>
      <TopNavbar />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
    </div>
  );
};
