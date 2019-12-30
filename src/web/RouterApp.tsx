import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';

export default function RouterApp() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SignIn} />
      </Switch>
    </div>
  );
};
