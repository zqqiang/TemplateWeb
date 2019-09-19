import React from "react";
import Avatar from "@material-ui/core/Avatar";

class UserInfo extends React.Component {
  render() {
    return (
      <div className="user-profile d-flex flex-row align-items-center">
        <Avatar
          alt="..."
          src={require("../../assets/images/userAvatar/avataaars.svg")}
          className="user-avatar "
        />
        <div className="user-detail">
          <h4 className="user-name" onClick={this.handleClick}>
            <strong>Config Server</strong>
          </h4>
        </div>
      </div>
    );
  }
}

export default UserInfo;
