import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { FormHelperText } from "@material-ui/core";

class Checkboxes extends Component {
  render() {
    const props = this.props;
    return (
      <div className="col-sm-4">
        <FormHelperText className="text-grey">{props.label}</FormHelperText>
        <FormGroup className="d-flex flex-row">
          {props.options &&
            props.options.map(option => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    color="primary"
                    onChange={props.onChange}
                    value={option}
                  />
                }
                label={option}
              />
            ))}
        </FormGroup>
      </div>
    );
  }
}

export default Checkboxes;
