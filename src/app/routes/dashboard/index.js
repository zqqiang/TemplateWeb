import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./routes/Main/index";

const Dashboard = ({ match }) => {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route path={`${match.url}/main`} component={Main} />
      </Switch>
    </div>
  );
};

export default Dashboard;
