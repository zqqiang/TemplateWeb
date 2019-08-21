import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

class RadioButtonsGroup extends Component {
  render() {
    const props = this.props;
    return (
      <div className="col-sm-4">
        <FormControl component="fieldset" required>
          <FormLabel component="legend">{props.label}</FormLabel>
          <RadioGroup
            className={props.className}
            aria-label={props.id}
            name={props.id}
            value={props.value}
            onChange={props.onChange}
          >
            {props.options &&
              props.options.map(option => (
                <FormControlLabel
                  key={option.label}
                  value={option.value}
                  control={<Radio color="primary" />}
                  label={option.label}
                />
              ))}
            {/*<FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" />*/}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default RadioButtonsGroup;
