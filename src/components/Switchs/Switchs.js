import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class Switchs extends React.Component {
  render() {
    return (
      <div className="col-md-3 col-12">
        <FormControlLabel
          control={
            <Switch
              color="primary"
              id={this.props.id}
              classes={{
                checked: "text-primary"
              }}
              checked={this.props.value}
              onChange={this.props.onChange}
            />
          }
          label={this.props.label}
        />
      </div>
    );
  }
}

export default Switchs;
