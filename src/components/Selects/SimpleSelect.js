import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class SimpleSelect extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="col-lg-3 col-sm-6 col-12">
        <FormControl className="w-100 mb-2">
          <InputLabel htmlFor="">{props.label}</InputLabel>
          <Select
            value={
              props.value
                ? props.value
                : props.options[0].value
                ? props.options[0].value
                : props.options[0]
            }
            onChange={props.onChange}
            input={<Input id={props.id} name={props.id} />}
          >
            {props.options &&
              props.options.map(option => {
                let value = option.value ? option.value : option;
                let label = option.label ? option.label : option;
                return (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default SimpleSelect;
