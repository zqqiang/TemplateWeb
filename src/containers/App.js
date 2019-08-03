import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import MainApp from "../app/index";
import AppLocale from "../IngProvider";

class App extends Component {
  render() {
    const { match, location, initURL, locale } = this.props;

    if (location.pathname === "/") {
      if (initURL === "" || initURL === "/" || initURL === "/signin") {
        return <Redirect to={"/app/network/interfaces"} />;
      }
    }

    const currentAppLocale = AppLocale[locale.locale];
    return (
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <div className="app-main">
          <Switch>
            <Route path={`${match.url}app`} component={MainApp} />
          </Switch>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ settings, auth }) => {
  const { locale } = settings;
  const { initURL } = auth;
  return { initURL, locale };
};

export default connect(mapStateToProps)(App);
