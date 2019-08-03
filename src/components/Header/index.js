import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";

class Header extends React.Component {
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
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
