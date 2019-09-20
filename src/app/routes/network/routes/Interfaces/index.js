import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import List from "./routes/list";
import Edit from "./routes/edit";

const Interfaces = ({ match }) => {
  return (
    <div className="app-wrapper">
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
        <Route path={`${match.url}/list`} component={List} />
        <Route path={`${match.url}/edit`} component={Edit} />
      </Switch>
    </div>
  );
};

export default Interfaces;
