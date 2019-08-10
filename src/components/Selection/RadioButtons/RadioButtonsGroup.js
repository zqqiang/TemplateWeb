import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

class RadioButtonsGroup extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <FormControl component="fieldset" required>
          <FormLabel component="legend">{this.props.label}</FormLabel>
          <RadioGroup
            className={this.props.className}
            aria-label={this.props.id}
            name={this.props.id}
            value={this.props.value}
            onChange={this.props.onChange}
          >
            {this.props.options &&
              this.props.options.map(option => (
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
