import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class Switchs extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="col-md-3 col-12">
        <FormControlLabel
          control={
            <Switch
              color="primary"
              id={props.id}
              classes={{
                checked: "text-primary"
              }}
              value={props.value}
              onChange={props.onChange}
            />
          }
          label={props.label}
        />
      </div>
    );
  }
}

export default Switchs;
