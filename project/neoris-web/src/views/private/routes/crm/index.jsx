import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import Loadable from "react-loadable";

const Dashboard = Loadable({
  loader: () => import("./routes/dashboard"),
  loading: TopBarProgress,
});

const Home = Loadable({
  loader: () => import("./routes/home"),
  loading: TopBarProgress,
});

const Dash = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};

export default Dash;
