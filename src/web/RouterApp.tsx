import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from "./SignUp";
import TopNavbar from '../component/TopNavbar'
import {createBrowserHistory} from "history";

export default function RouterApp() {

  const history = createBrowserHistory();

  const routes = (
    <Router history={history}>
      <Route exact path={"/"} component={SignIn} />
      <Route exact path={"/SignIn"} component={SignIn} />
      <Route exact path={"/SignUp"} component={SignUp} />
      <Route exact path={"/URL-Register"} component={SignIn} />
      <Route exact path={"/CommentManagementService"} component={SignIn} />
    </Router>
  );

  return (
    <div>
      <TopNavbar />
      <Switch>
        {routes}
      </Switch>
    </div>
  );
};
