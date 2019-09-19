import React from "react";
import { Route, Switch } from "react-router-dom";

import List from "./routes/Interfaces/routes/list";

const Interfaces = ({ match }) => {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route path={`${match.url}/list`} component={List} />
      </Switch>
    </div>
  );
};

export default Interfaces;
