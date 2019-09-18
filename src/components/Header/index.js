import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

class Header extends React.Component {
  Apps = versions => {
    return (
      <ul className="jr-list jr-list-half">
        {versions &&
          versions.map(version => (
            <li key={version} className="jr-list-item">
              <Link className="jr-list-link" to="/app/calendar/basic">
                <i className="zmdi zmdi-calendar zmdi-hc-fw" />
                <span className="jr-list-text">
                  <span>{version}</span>
                </span>
              </Link>
            </li>
          ))}
      </ul>
    );
  };
  render() {
    return (
      <AppBar className="app-main-header">
        <Toolbar className="app-toolbar">
          <Link className="app-logo mr-2 d-none d-sm-block" to="/">
            <img
              src={require(`../../assets/images/logo.png`)}
              alt="Jambo"
              title="Jambo"
            />
          </Link>
          <ul className="header-notifications list-inline ml-auto">
            <li className="list-inline-item">
              <Dropdown className="quick-menu app-notification" isOpen={true}>
                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown"
                >
                  <span className="app-notification-menu">
                    <i className="zmdi zmdi-apps zmdi-hc-fw zmdi-hc-lg" />
                    <span>Apps</span>
                  </span>
                </DropdownToggle>
                <DropdownMenu>{this.Apps([`6.2.0`, `6.1.0`])}</DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
