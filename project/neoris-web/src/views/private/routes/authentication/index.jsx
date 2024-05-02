import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import Loadable from "react-loadable";

const Login = Loadable({
  loader: () => import("./routes/login"),
  loading: TopBarProgress,
});

const RecoverPasword = Loadable({
  loader: () => import("./routes/recover-password"),
  loading: TopBarProgress,
});

const Auth = ({setUser}) => (
  <Switch>
    <Route path="/login">
      <Login setUser={setUser}/>
    </Route>
    <Route path="/recover">
      <RecoverPasword />
    </Route>
    <Redirect to="/login" />
  </Switch>
);

export default Auth;
