import React from "react";
import { Route, Switch } from "react-router-dom";

import Interfaces from "./routes/Interfaces/index";

const Dashboard = ({ match }) => {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route path={`${match.url}/interfaces`} component={Interfaces} />
      </Switch>
    </div>
  );
};

export default Dashboard;
