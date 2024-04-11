import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Private from "./views/private";
import Public from "./views/public";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/public">
          <Public />
        </Route>
        <Route path="/">
          <Private />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
