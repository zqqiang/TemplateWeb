import React from "react";
import Sidebar from "../containers/SideNav/index";
import Header from "../components/Header/index";
import { Route, Switch, withRouter } from "react-router-dom";

import Dashboard from "./routes/dashboard/index";
import Network from "./routes/network/index";

class App extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className={`app-container fixed-drawer`}>
        <Sidebar />
        <div className="app-main-container">
          <div className={`app-header`}>
            <Header />
          </div>
          <main className="app-main-content-wrapper">
            <div className="app-main-content">
              <Switch>
                <Route path={`${match.url}/dashboard`} component={Dashboard} />
                <Route path={`${match.url}/network`} component={Network} />
              </Switch>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
