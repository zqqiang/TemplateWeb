import React from "react";
import Drawer from "@material-ui/core/Drawer";
import UserInfo from "../../components/UserInfo";
import SidenavContent from "./SidenavContent";

class SideNav extends React.PureComponent {
  render() {
    let drawerStyle = "d-xl-flex";

    return (
      <div className={`app-sidebar d-none ${drawerStyle}`}>
        <Drawer
          className="app-sidebar-content"
          variant="permanent"
          open={true}
          // onClose={this.onToggleCollapsedNav}
          classes={{
            paper: "side-nav"
          }}
        >
          <UserInfo />
          <SidenavContent />
        </Drawer>
      </div>
    );
  }
}

export default SideNav;
