import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

import Ye from "./KanyeWyoming_Getty_Ringer.png";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Public = () => {
  const YeComponent = () => <img src={Ye} alt="Ye" />;

  return (
    <Router>
      <Suspense fallback={<TopBarProgress />}>
        <Switch>
          <Route path="public/Ye" component={YeComponent} />
        </Switch>
        <Redirect to="/public/Ye" />
      </Suspense>
    </Router>
  );
};

export default React.memo(Public);
