import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import Loadable from "react-loadable";

//Client Routes
const Profile = Loadable({
  loader: () => import("./routes/dashboard"),
  loading: TopBarProgress,
});

const Courses = Loadable({
  loader: () => import("./routes/courses"),
  loading: TopBarProgress,
});

//Admin Routes
const AdminDashboard = Loadable({
  loader: () => import("./routes/admin/dashboardAdmin"),
  loading: TopBarProgress,
});

const Users = Loadable({
  loader: () => import("./routes/admin/users"),
  loading: TopBarProgress,
});

const Dash = ({ user }) => {
  if (user?.es_admin) {
    return (
      <Switch>
        <Route path="/dashboard">
          <AdminDashboard />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Redirect to="/dashboard" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/courses">
        <Courses />
      </Route>
      <Redirect to="/profile" />
    </Switch>
  );
};

export default Dash;
